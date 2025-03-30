import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="flex flex-col p-6 gap-y-3 h-1/2">
        <h3 className="text-base font-medium">Transcript</h3>
        <ScrollArea className="flex flex-col overflow-hidden text-balance h-[215.14px]">
          <p className="pr-3 text-base text-muted-foreground">
            Click the start listening to start the transcript... Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Omnis soluta ad illum,
            porro ea voluptate repellendus officia distinctio iste dolorum
            dolor, tempora tenetur quam saepe sint ullam rem! Inventore, nisi,
            distinctio maiores, ipsam quisquam rerum facilis qui repellendus
            fugiat vel quas quo facere! Et dignissimos repudiandae praesentium
            tempora nihil minima soluta qui impedit accusamus, quis facilis
            commodi sunt aperiam neque dolorum laboriosam, magnam expedita.
            Aliquam voluptates ullam ducimus! Culpa eum quisquam sed odit,
            expedita qui dolores quos quia fugiat reprehenderit illum
            repellendus maiores distinctio eveniet, ducimus quas laboriosam
            omnis voluptate. Quos obcaecati labore et neque voluptas excepturi
            similique quisquam? Magnam?
          </p>
        </ScrollArea>
      </section>
      <Separator />
      <section className="flex flex-col p-6 gap-y-3 h-1/2">
        <h3 className="text-base font-medium">Copilot</h3>
        <ScrollArea className="flex flex-col overflow-hidden text-balance h-[215.14px]">
          <p className="pr-3 text-base text-muted-foreground">
            Copilot answer will appear here... Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Omnis soluta ad illum, porro ea
            voluptate repellendus officia distinctio iste dolorum dolor, tempora
            tenetur quam saepe sint ullam rem! Inventore, nisi, distinctio
            maiores, ipsam quisquam rerum facilis qui repellendus fugiat vel
            quas quo facere! Et dignissimos repudiandae praesentium tempora
            nihil minima soluta qui impedit accusamus, quis facilis commodi sunt
            aperiam neque dolorum laboriosam, magnam expedita. Aliquam
            voluptates ullam ducimus! Culpa eum quisquam sed odit, expedita qui
            dolores quos quia fugiat reprehenderit illum repellendus maiores
            distinctio eveniet, ducimus quas laboriosam omnis voluptate. Quos
            obcaecati labore et neque voluptas excepturi similique quisquam?
            Magnam?
          </p>
        </ScrollArea>
      </section>
      <Separator />
    </>
  );
}
