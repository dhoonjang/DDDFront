export const errorHandler = (error: any) => {
  console.log(error);
  return {
    status: "ERROR"
  };
};
