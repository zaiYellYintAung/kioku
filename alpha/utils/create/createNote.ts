import { NoteCreateType } from "@/models/personal/Note";

const createNote = async ({ user, title, content, folder }: NoteCreateType) => {
  const postBody = {
    user,
    title,
    content,
    folder,
  };

  try {
    const response = await fetch("/api/note", {
      method: "POST",
      body: JSON.stringify(postBody),
    });
    if (response.ok) {
      console.log("success");
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default createNote;