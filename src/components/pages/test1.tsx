import { addDoc, collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect, useState } from "react";

export default function Test1() {
  const firestoreDb = useSelector((state: RootState) => state.firebase).db;

  const [testNumber, setTestNumber] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(firestoreDb, "test")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        test: doc.data,
      }));
      setTestNumber(newData as any);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary">Button</button>
      <NavLink to="/test2" className="btn btn-primary">
        To test 2
      </NavLink>
      testNumber:{testNumber.map((x: any) => x.testNumber)}
    </div>
  );
}
