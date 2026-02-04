import SignUpPage from "./SignUpPage";
import { Suspense } from "react";
export default function SignUp() {
  return (
    <Suspense fallback={null}>
      <SignUpPage />
    </Suspense>
  );
}
