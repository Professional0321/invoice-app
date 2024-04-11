import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

export const apiServer = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

type ApiError = {
  statusCode: number;
  error: string;
  message: string;
};

function isApiErrorResponse(res: any): res is ApiError {
  return res && "error" in res && "statusCode" in res && "message" in res;
}

export const handleErrorMessage = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    return "Unknown error";
  }

  if (!error.response) {
    return error.message;
  }

  if (!isApiErrorResponse(error.response.data)) {
    return error.message;
  }

  return error.response.data.message;
};

export const handleErrorCode = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    throw Error("Unknown error");
  }

  if (!error.response) {
    return error.status;
  }

  if (!isApiErrorResponse(error.response.data)) {
    return error.response.status;
  }

  return error.response.data.statusCode;
};
