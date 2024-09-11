import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import blogRoutes from "./routes/blogRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors"; // CORS 미들웨어
import errorHandler from "./middlewares/errorHandler";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// CORS 설정
const allowedOrigins = [
  "http://localhost:3000", // 로컬 개발 환경
  "https://your-vercel-app.vercel.app", // Vercel에 배포된 클라이언트 주소
];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // 허용된 origin이거나 origin이 없는 경우(비공개) 허용
    } else {
      callback(new Error("Not allowed by CORS")); // 허용되지 않은 origin 차단
    }
  },
  credentials: true, // 쿠키 허용
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204, // 프리플라이트 요청에 대한 응답 코드
};

// CORS 미들웨어 적용
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // 모든 OPTIONS 요청에 대해 CORS 적용

// 기타 미들웨어 설정
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());

// DB 연결
connectDB();

// API 라우트 설정
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/dashboard", dashboardRoutes);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 핸들러 (정의되지 않은 경로로 접근 시 처리)
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// 에러 핸들러
app.use(errorHandler);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
