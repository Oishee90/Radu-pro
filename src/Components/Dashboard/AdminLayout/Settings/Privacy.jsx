// src/components/settings/Privacy.jsx
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import {
  useGetPrivacyQuery,
  useGetTermsQuery,
  useUpdateTermsMutation,
} from "../../../../Redux/feature/authapi";

const Privacy = () => {
  const editor = useRef(null);
  const { data: privacy, refetch } = useGetPrivacyQuery(); // GET API
  const [content, setContent] = useState(privacy?.content);
  const [updateTerms] = useUpdateTermsMutation(); // POST/Update API

  const PrivacyType = privacy?.type || "privacy";
  const id = privacy?.id;
  useEffect(() => {
    setContent(privacy?.content);
  }, [privacy]);
  const config = {
    readonly: false,
    toolbar: true,
    spellcheck: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: "bold,italic,underline,|,ul,|,align",
    removeButtons: [
      "strikethrough",
      "eraser",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "image",
      "video",
      "table",
      "link",
      "hr",
      "indent",
      "outdent",
      "superscript",
      "subscript",
      "copyformat",
      "fullsize",
      "preview",
      "print",
      "about",
    ],
    toolbarAdaptive: false,
    height: "auto",
    minHeight: 300,
    style: {
      font: "14px/1.6 'Helvetica Neue', Arial, sans-serif",
      color: "#767676",
    },
    placeholder: "",
  };

  const handleUpdate = async () => {
    try {
      await updateTerms({ type: PrivacyType, content, id }).unwrap();
      refetch();
      Swal.fire({
        icon: "success",
        title: "Updated Successfully!",
        confirmButtonColor: "#009038",
      });
    } catch (error) {
      // console.error("Failed to update privacy:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to update",
        text: "Please try again.",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 inter">
          Privacy Policy
        </h1>
        <button
          onClick={handleUpdate}
          className="px-4 py-2 main-color hover:bg-[#5fa125] text-white text-sm font-medium rounded-lg transition"
        >
          Save
        </button>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
          className="jodit-editor-custom"
        />
      </div>
    </div>
  );
};

export default Privacy;
