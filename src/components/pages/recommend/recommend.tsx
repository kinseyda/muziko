import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../../spotifySlice";
import { AppDispatch, RootState } from "../../../store";
import NavPage from "../../common/page/nav-page";
import {
  AdjustmentsVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { S_TrackObject } from "../../../data/schema/spotify";
import { Track } from "../../../data/schema/domain/track";
import TopicList from "../../common/topic-list/topic-list";
import Centered from "../../common/centered";
import { languages } from "../../../data/text/languages";
const recommendationsSchema = Yup.object().shape({
  genres: Yup.array()
    .of(Yup.string())
    .max(5, "A maximum of 5 genres can be selected")
    .min(1, "A minimum of 1 genre can be selected"),
});

type SidebarParams = Yup.InferType<typeof recommendationsSchema>;
export default function Recommendations() {
  const token = useSelector((state: RootState) => state.spotify.accessToken);
  const [genres, setGenres] = useState([] as string[]);
  const dispatch = useDispatch<AppDispatch>();
  const [recommendationResults, setRecommendationResults] = useState(
    undefined as Track[] | undefined | "loading" | "error"
  );

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].recommendations;

  async function updateRecs(values: SidebarParams) {
    setRecommendationResults("loading");
    const result = (await (
      await fetch(
        "https://api.spotify.com/v1/recommendations?" +
          new URLSearchParams({
            seed_genres: values.genres?.join() || "",
          }),
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token!!.token}` },
        }
      )
    ).json()) as { tracks?: S_TrackObject[] };
    if (result.tracks)
      setRecommendationResults(result.tracks.map((x) => new Track(x)));
    else setRecommendationResults("error");
  }

  useEffect(() => {
    const getGenres = async () => {
      const values = (await (
        await fetch(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token!!.token}` },
          }
        )
      ).json()) as { genres: string[] };

      setGenres(values.genres);
    };
    if (!token) {
      dispatch(fetchToken());
    } else {
      getGenres();
    }
  }, [token]);
  return (
    <NavPage title={text.recommendations}>
      <div className="drawer lg:drawer-open h-full">
        <input
          id="recommendations-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <div className="text-3xl font-bold flex content-center items-center m-3">
            <label
              htmlFor="recommendations-drawer"
              className="btn btn-circle drawer-button lg:hidden"
            >
              <AdjustmentsVerticalIcon className="h-8" />
            </label>
            <div className="m-3"></div>
            <h1>{text.recommendations}</h1>
          </div>
          <div className="grow">
            {recommendationResults !== undefined ? (
              recommendationResults === "loading" ? (
                <Centered>
                  <span className="loading loading-spinner w-16"></span>
                </Centered>
              ) : recommendationResults === "error" ? (
                <div className="m-5">{text.error}</div>
              ) : recommendationResults.length ? (
                <TopicList topics={recommendationResults} />
              ) : (
                <Centered>{text.noResults}</Centered>
              )
            ) : (
              <div className="m-5">{text.emptyQuery}</div>
            )}
          </div>
        </div>
        <div className="drawer-side h-full z-20 lg:z-0">
          <label
            htmlFor="recommendations-drawer"
            className="drawer-overlay"
          ></label>
          <ul className=" p-4 w-80 h-full bg-base-200">
            <Formik
              initialValues={{ genres: [] as string[] }}
              validationSchema={recommendationsSchema}
              onSubmit={(values, { setSubmitting }) => {
                updateRecs(values);
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
                        <label htmlFor="selected" className="label">
                          <span className="label-text">{text.selected}</span>
                        </label>
                        <div className="mb-4">
                          <div className="flex gap-1 flex-wrap justify-center max-h-80 p-1 overflow-scroll">
                            {values.genres.map((x) => (
                              <button
                                key={x}
                                className="btn btn-xs btn-outline"
                                onClick={() =>
                                  values.genres.splice(
                                    values.genres.indexOf(x),
                                    1
                                  )
                                }
                                type="submit"
                              >
                                {x} <XMarkIcon className="h-4" />
                              </button>
                            ))}
                          </div>
                          <div className="w-full flex justify-end">
                            <ErrorMessage
                              name="genres"
                              component="div"
                              className="label-text-alt text-error -mb-4"
                            />
                          </div>
                        </div>
                        <label htmlFor="query" className="label">
                          <span className="label-text">{text.available}</span>
                        </label>
                        <div className="flex gap-1 flex-wrap justify-center max-h-80 p-1 overflow-scroll">
                          {genres
                            .filter((x) => !values.genres.includes(x))
                            .map((x) => (
                              <button
                                key={x}
                                onClick={() => {
                                  values.genres.push(x);
                                }}
                                className="btn btn-xs btn-outline"
                                type="submit"
                              >
                                {x}
                              </button>
                            ))}
                        </div>
                      </div>
                    </li>
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
