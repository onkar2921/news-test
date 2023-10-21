import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../Context/NewsContextProvider";
import Error from "../Components/Error";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
export default function Post() {
  const { state, searchSpecificNews } = useContext(NewsContext);
  const param = useParams();

  useEffect(() => {
    searchSpecificNews(param?.objectId);
  }, [param?.objectId]);

  const decodeEntities = (html) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  };

  const parseContent = (text) => {
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;
    const match = text.match(linkRegex);

    if (match) {
      const link = match[1];
      const replacedText = text.replace(match[0], "");
      return (
        <div>
          {replacedText}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {link}
          </a>
        </div>
      );
    }

    return text;
  };

  const processContent = (text) => {
    const decodedContent = decodeEntities(text);
    const parsedContent = parseContent(decodedContent);
    return parsedContent;
  };

  const displayComments = (commentsArray) => {

      


    return commentsArray?.map((item, index) => {
      const renderedContent = processContent(item?.text);

      return (
        <div key={index} className="my-4 p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold text-blue-500">
            {item?.author}
          </h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: renderedContent }}
          ></div>
          <hr className="my-2" />

          {/* Add a specific style for comments about comments */}
          <div className="pl-4 border-l-2 border-blue-500">
            {item?.children ? displayComments(item?.children) : null}
          </div>
        </div>
      );
    });
  };

  const renderedComments = displayComments(state?.postDetail?.children);

  return (
    <div className="container mx-auto p-4">
     {
     
      !state?.loading && !state?.Error ? (
        <div className="bg-white p-4 rounded shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-500 w-full text-center">
          <span className="text-bold text-black ">Title:-</span>
          { state?.postDetail?.title}
        </h1>
        <h3 className="text-lg font-medium text-gray-700  w-full text-center">
          <span className="text-bold text-black">Points:-</span>
          {state?.postDetail?.points}
        </h3>

        <div className="mt-4">
          <span className="text-bold text-black"></span>

          {renderedComments}
          {
            state?.postDetail?.children?.length<1 &&    <h1 className="w-full h-full text-center bg-red-700 text-black">No Comments</h1>
                
          }
        </div>
      </div>
      ) :
      <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>

     }




     {
        state?.Error && <Error/>
      }
    </div>
    
  )
 
}

