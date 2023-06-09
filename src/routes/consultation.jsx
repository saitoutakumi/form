// 相談入力フォーム

import { Link } from "react-router-dom";
import { useAnswerContext } from "../AnswerProvider";

const Consultation = () => {
  const { comment, setComment } = useAnswerContext();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <div className="m-4 pl-4 pr-4 pb-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>ご相談内容をご記入ください</h1>
        </div>
        <div>
          <p>-ご相談内容-</p>
        </div>
        <div>
          <textarea
            id="inputBox"
            type="text"
            name="comment"
            className="text-[black] mt-[5px] border-2 w-full h-[300px]"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <Link to="/question1">
            <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
              {"<  前へ戻る"}
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/confirmation">
            <button
              type="submit"
              className="h-12 px-2 m-2 text-lg text-white bg-green-500"
            >
              {"次へ進む  >"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Consultation;
