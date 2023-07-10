import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../../spotifySlice";
import { AppDispatch, RootState } from "../../../store";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";

export default function Recommendations() {
  const token = useSelector((state: RootState) => state.spotify.accessToken);
  const [genres, setGenres] = useState([] as string[]);
  const dispatch = useDispatch<AppDispatch>();
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
    <NavPage title="Recommendations">
      <Centered>
        <div>Recommendations</div>
      </Centered>
    </NavPage>
  );
}
