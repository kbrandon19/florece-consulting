import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from '@/components/ui/button'

function booking() {
  return (
    <div className="w-full h-auto bg-lavender my-20 py-20 text-center">
      <div className="w-5/6 h-auto mx-auto flex flex-col gap-y-2 justify-center content-center font-regular uppercase drop-shadow-lg tracking-wider max-w-screen-md">
        <h1 className="font-semibold text-5xl">
          Ready to amplify your impact?
        </h1>

        <p className="text-2xl md:text-3xl  ">
          Book a consultation with Florece Consulting today and let&apos;s start
          transforming your communication strategy!
        </p>
      </div>

      <div className="w-5/6 h-auto mx-auto flex justify-center items-center mt-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple text-seaSalt uppercase tracking-wide hover:bg-lavender hover:border-2 hover:drop-shadow-lg hover:border-purple hover:text-black ">Book a consultation call</Button>
            </DialogTrigger>
          <DialogContent className="max-w-screen-xl">
            <iframe src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ2GOnYpAfbbxKh_yat5FyvpsP9z0PRS5G0rWwR-9q3_Bkd1CjjJtB9LOeg2Y7l1gz7FPKvlA9T3?gv=true' loading="lazy"
            allowFullScreen= {true} width="100%" height="700" >

            </iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default booking;
