import { useSearchParams } from "react-router-dom";
import Page from "../../page/page";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { spotifySlice } from "../../../spotifySlice";

export default function Search() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify).accessToken;
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState(undefined);

  const searchVal = searchParams.keys().next().value;

  useEffect(() => {
    const getSearch = async () => {
      let curToken = token;
      if (
        !token ||
        token.created + token.validityPeriod <
          Math.floor(new Date().getTime() / 1000)
      ) {
        const newToken = (
          await (
            await fetch("https://requesttoken-7ybywndcja-uc.a.run.app", {
              method: "GET",
            })
          ).json()
        ).token;
        dispatch(
          spotifySlice.actions.setAccessToken({
            created: Math.floor(new Date().getTime() / 1000),
            token: newToken.access_token,
            validityPeriod: newToken.expires_in,
          })
        );
        curToken = newToken;
      }

      const values = await (
        await fetch(
          "https://api.spotify.com/v1/search?" +
            new URLSearchParams({
              q: searchVal,
              type: ["artist", "album", "track"].join(),
            }),
          {
            method: "GET",
            headers: { Authorization: `Bearer ${curToken?.token}` },
          }
        )
      ).json();

      setSearchResults(values);
    };
    getSearch();
  }, []);

  return (
    <Page>
      <div>Search: {searchVal}</div>
      <div>{JSON.stringify(searchResults)}</div>
    </Page>
  );
}
