import type { Dictionary } from "@/features/i18n/types";

const viDictionary: Dictionary = {
  errors: {
    unexpected: {
      default: "Đã xảy ra lỗi",
      continueWithGithub: "Đã xảy ra lỗi khi đăng nhập bằng GitHub",
    },
    auth: "Đã xảy ra lỗi khi xác thực",
  },
  loading: {
    default: "Đang tải...",
  },
  continueWithGithub: "Tiếp tục với GitHub",
};

export { viDictionary };
