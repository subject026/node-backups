const getFilename = (path: string): string => {
  let filename = path.split("\\");
  if (filename.length === 1) filename = path.split("/");
  // if path had a trailing slash last array item will be an empty string
  if (filename[filename.length - 1] === "") filename.pop();
  return filename[filename.length - 1];
};

export default getFilename;
