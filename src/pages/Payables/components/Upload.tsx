import { Button } from "@mantine/core";
import { useDropzone } from "react-dropzone";
import { GrStatusGood } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa6";

export const Upload = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });

  return (
    <>
      <div className="mt-10">
        <div
          {...getRootProps({
            className:
              "dropzone flex justify-center my-2 rounded-xl  cursor-pointer border gap-3 rounded-10 p-2 py-8 border-dashed",
          })}
        >
          <input {...getInputProps()} />
          {acceptedFiles.length === 0 && (
            <div className="grid place-items-center">
              <div className=" flex justify-center items-center">
                <FaRegImage />
              </div>
              <div className="flex gap-2 mt-3">
                Drag and drop an invoice here or,
              </div>
              <Button
                size="sm"
                className="bg-primary mt-4 rounded-full font-medium"
              >
                Browse computer
              </Button>
            </div>
          )}
          {acceptedFiles.length !== 0 && (
            <div className="flex items-center gap-1">
              <GrStatusGood size="20" color="#00D8D8" /> {acceptedFiles[0].name}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
