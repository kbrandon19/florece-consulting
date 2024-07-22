import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function booking() {
  return (
    <div className="w-full h-auto bg-lavender my-20 py-20 text-center">
      <div className="w-5/6 h-auto mx-auto flex flex-col gap-y-2 justify-center content-center font-regular drop-shadow-lg tracking-wider max-w-screen-md">
        <h1 className="font-semibold text-5xl">
          Ready to amplify your impact?
        </h1>

        <p className="text-2xl md:text-3xl  ">
          Book a consultation with florece Consulting today and let&apos;s start
          transforming your communication strategy!
        </p>
      </div>

      <div className="w-5/6 h-auto mx-auto flex justify-center items-center mt-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="border-2 border-charcoal text-seaSalt rounded-none hover:rounded-lg hover:border-purple uppercase tracking-wide hover:drop-shadow-lg hover:text-seaSalt bg-charcoal hover:bg-purple transition-all">Book a consultation call</Button>
          </DialogTrigger>
          <DialogContent className="max-w-screen-xl">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2GOnYpAfbbxKh_yat5FyvpsP9z0PRS5G0rWwR-9q3_Bkd1CjjJtB9LOeg2Y7l1gz7FPKvlA9T3?gv=true"
              loading="lazy"
              allowFullScreen={true}
              width="100%"
              height="700"
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default booking;
