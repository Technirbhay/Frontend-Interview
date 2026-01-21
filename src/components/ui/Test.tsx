import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import "./Test.css";

export default function Test() {
  return (
    <Dialog>
      <DialogTrigger className="openBtn">
        Open Dialog
      </DialogTrigger>

      <DialogContent className="dialogBox">
        <h2 className="dialogTitle">Create Blog</h2>
        <p className="dialogText">Dialog is working</p>
      </DialogContent>
    </Dialog>
  );
}
