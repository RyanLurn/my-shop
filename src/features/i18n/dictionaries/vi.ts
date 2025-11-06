import type { Dictionary } from "@/features/i18n/types";

const viDictionary: Dictionary = {
  errors: {
    unexpected: {
      default: "Đã xảy ra lỗi",
      continueWithGithub: "Đã xảy ra lỗi khi đăng nhập bằng GitHub",
    },
    auth: "Đã xảy ra lỗi khi xác thực",
  },
  loadingPleaseWait: "Đang tải, vui lòng đợi...",
  continueWithGithub: "Tiếp tục với GitHub",
  signUp: "Đăng ký",
  signIn: "Đăng nhập",
  alreadyHaveAnAccount: "Bạn đã có tài khoản?",
  dontHaveAnAccount: "Bạn chưa có tài khoản?",
};

export { viDictionary };
