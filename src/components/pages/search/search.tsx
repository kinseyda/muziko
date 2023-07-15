import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { Artist } from "../../../data/schema/domain/artist";
import Release from "../../../data/schema/domain/release";
import Topic from "../../../data/schema/domain/topic";
import { Track } from "../../../data/schema/domain/track";
import { S_SearchResponse } from "../../../data/schema/spotify";
import { languages } from "../../../data/text/languages";
import { fetchToken } from "../../../spotifySlice";
import { AppDispatch, RootState } from "../../../store";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";
import TopicList from "../../common/topic-list/topic-list";

export function convertSpotifySearchSchema(values: S_SearchResponse): Topic[] {
  const topicAr: Topic[] = [];
  if (values.tracks) {
    for (const track of values.tracks.items) {
      topicAr.push(new Track(track));
    }
  }
  if (values.albums) {
    for (const album of values.albums.items) {
      topicAr.push(new Release(album));
    }
  }
  if (values.artists) {
    for (const artist of values.artists.items) {
      topicAr.push(new Artist(artist));
    }
  }

  topicAr.sort((x, y) => y.popularity - x.popularity);
  return topicAr;
}

const searchSchema = Yup.object()
  .shape({
    query: Yup.string().required("Required"),
    includeArtists: Yup.boolean(),
    includeReleases: Yup.boolean(),
    includeTracks: Yup.boolean(),
  })
  .test({
    name: "includes",
    test: function (values) {
      const isValid =
        values.includeArtists || values.includeReleases || values.includeTracks;

      if (isValid) return true;
      return this.createError({
        path: "includes",
        message: "Select at least one topic type",
      });
    },
  });

type SidebarParams = Yup.InferType<typeof searchSchema>;

export default function Search() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify.accessToken);
  const dispatch = useDispatch<AppDispatch>();

  const [searchResults, setSearchResults] = useState(
    undefined as Topic[] | undefined
  );

  const defaultIncludes = !(
    searchParams.get("includeArtists") ||
    searchParams.get("includeReleases") ||
    searchParams.get("includeTracks")
  );

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].search;

  function updateSearch(search: SidebarParams) {
    const getSearch = async () => {
      const include: string[] = [];
      if (search.includeArtists === undefined || search.includeArtists === true)
        include.push("artist");
      if (
        search.includeReleases === undefined ||
        search.includeReleases === true
      )
        include.push("album");
      if (search.includeTracks === undefined || search.includeTracks === true)
        include.push("track");
      const values = (await (
        await fetch(
          "https://api.spotify.com/v1/search?" +
            new URLSearchParams({
              q: search.query,
              type: include.join(),
            }),
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token!!.token}` },
          }
        )
      ).json()) as S_SearchResponse;

      setSearchResults(convertSpotifySearchSchema(values));
    };
    if (!token) {
      dispatch(fetchToken());
    } else {
      getSearch();
    }
  }

  useEffect(() => {
    if (searchParams.get("query")) {
      if (
        searchParams.get("includeArtists") ||
        searchParams.get("includeReleases") ||
        searchParams.get("includeTracks")
      ) {
        updateSearch({
          query: searchParams.get("query")!!,
          includeArtists: JSON.parse(
            searchParams.get("includeArtists") ||
              JSON.stringify(defaultIncludes)
          ),
          includeReleases: JSON.parse(
            searchParams.get("includeReleases") ||
              JSON.stringify(defaultIncludes)
          ),
          includeTracks: JSON.parse(
            searchParams.get("includeTracks") || JSON.stringify(defaultIncludes)
          ),
        });
      } else {
        updateSearch({
          query: searchParams.get("query")!!,
          includeArtists:
            JSON.parse(
              searchParams.get("includeArtists") ||
                JSON.stringify(defaultIncludes)
            ) || undefined,
          includeReleases:
            JSON.parse(
              searchParams.get("includeReleases") ||
                JSON.stringify(defaultIncludes)
            ) || undefined,
          includeTracks:
            JSON.parse(
              searchParams.get("includeTracks") ||
                JSON.stringify(defaultIncludes)
            ) || undefined,
        });
      }
    }
  }, [token]);

  return (
    <NavPage title={`${text.search}: "${searchParams.get("query") || "None"}"`}>
      <div className="drawer lg:drawer-open h-full">
        <input id="search-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="text-3xl font-bold flex content-center items-center m-3">
            <label
              htmlFor="search-drawer"
              className="btn btn-circle drawer-button lg:hidden"
            >
              <AdjustmentsVerticalIcon className="h-8" />
            </label>
            <div className="m-3"></div>
            <h1>
              {text.searchFor}:{" "}
              {searchParams.get("query")
                ? `"${searchParams.get("query")}"`
                : text.emptyQueryTitle}
            </h1>
          </div>
          <div className="grow">
            {searchParams.get("query") ? (
              searchResults === undefined ? (
                <Centered>
                  <span className="loading loading-spinner w-16"></span>
                </Centered>
              ) : searchResults.length ? (
                <TopicList topics={searchResults} />
              ) : (
                <Centered>{text.noResults}</Centered>
              )
            ) : (
              <div className="m-5">{text.emptyQuery}</div>
            )}
          </div>
        </div>
        <div className="drawer-side h-full z-20 lg:z-0">
          <label htmlFor="search-drawer" className="drawer-overlay"></label>
          <ul className=" p-4 w-80 h-full bg-base-200">
            <Formik
              initialValues={{
                query: searchParams.get("query") || "",
                includeArtists:
                  searchParams.get("includeArtists") || defaultIncludes,
                includeReleases:
                  searchParams.get("includeReleases") || defaultIncludes,
                includeTracks:
                  searchParams.get("includeTracks") || defaultIncludes,
              }}
              validationSchema={searchSchema}
              onSubmit={(values, { setSubmitting }) => {
                if (values.query !== null) {
                  updateSearch(values as SidebarParams);
                }
                setSubmitting(false);
              }}
            >
              {({
                isSubmitting,
                errors,
                touched,
                values,
                submitForm,
                setFieldTouched,
              }) => (
                <Form>
                  <div className="flex flex-col">
                    <li className="flex flex-row justify-center items-center gap-3">
                      <div className="form-control w-full ">
                        <label htmlFor="query" className="label">
                          <span className="label-text">{text.queryLabel}</span>
                        </label>
                        <Field
                          type="text"
                          name="query"
                          placeholder={text.queryPlaceholder}
                          className={`input input-md input-bordered w-full ${
                            "query" in errors && "query" in touched
                              ? "input-error"
                              : ""
                          }`}
                        />
                        <label className="label">
                          <ErrorMessage
                            name="query"
                            component="div"
                            className="label-text-alt text-error -mb-4"
                          />
                        </label>
                      </div>
                    </li>
                    <li className="flex flex-row justify-center items-center gap-3">
                      <div className="form-control w-full gap-1">
                        <label htmlFor="atLeastOneRequired" className="label">
                          <span className="label-text">{text.include}:</span>
                        </label>
                        <span className="flex gap-2 items-center">
                          <Field
                            type="checkbox"
                            name="includeArtists"
                            className="toggle"
                            onClick={() => setFieldTouched("includes")}
                          />
                          <span>{text.artists}</span>
                        </span>
                        <span className="flex gap-2 items-center">
                          <Field
                            type="checkbox"
                            name="includeReleases"
                            className="toggle"
                            onClick={() => setFieldTouched("includes")}
                          />
                          <span>{text.releases}</span>
                        </span>
                        <span className="flex gap-2 items-center">
                          <Field
                            type="checkbox"
                            name="includeTracks"
                            className="toggle"
                            onClick={() => setFieldTouched("includes")}
                          />
                          <span>{text.tracks}</span>
                        </span>
                        <ErrorMessage
                          name="includes"
                          component="div"
                          className="label-text-alt text-error -mb-5"
                        />
                      </div>
                    </li>
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      type="submit"
                      className={`btn ${
                        Object.keys(errors).length ||
                        !values.query ||
                        isSubmitting
                          ? "btn-disabled"
                          : "btn-primary"
                      }`}
                      onClick={submitForm}
                    >
                      {text.search}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </ul>
        </div>
      </div>
    </NavPage>
  );
}
