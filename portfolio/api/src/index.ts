import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import blogRoutes from "./routes/blogRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors"; // CORS 미들웨어 추가
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

const corsOrigin =
  process.env.CORS_ORIGIN_DEV || process.env.CORS_ORIGIN_PRODUCT;

// CORS 설정
app.use(
  cors({
    origin: corsOrigin, // 허용할 도메인
    credentials: true, // 자격 증명(쿠키 등)을 허용
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // 허용할 HTTP 메소드
    allowedHeaders: ["Content-Type", "Authorization"], // 허용할 헤더
  })
);

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
