import { doLogin } from "src/app/actions";
export default function SignIn() {
  return (
    <form className="" action={doLogin}>
      <button
        type="submit"
        className="btn btn-warning"
        name="action"
        value="github"
      >
        Login
      </button>
    </form>
  );
}
