import { MicIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FooterIndex() {
  return (
    <footer className="grid items-center justify-center grid-cols-2 p-6 row-end-9 gap-x-3">
      <Button className="p-6 cursor-pointer" variant="default">
        <MicIcon className="w-6 h-6" /> Start listening
      </Button>
      <Button className="p-6 cursor-pointer" variant="default">
        <SendIcon className="w-6 h-6" /> Get answer
      </Button>
    </footer>
  );
}
