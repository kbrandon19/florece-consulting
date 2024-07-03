interface ContactFormEmailProps {
    firstname: string
    lastname:string
    email: string
    services:string
    message: string
  }
  
  const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
    firstname,
    lastname,
    email,
    services,
    message
  }) => (
    <div className="flex flex-col gap-y-10 p-4">
    <div className="text-center mb-6">
      <h1 className="font-bold">New Form Submission Received</h1>
    </div>

    <div>
      <h2 className="font-bold">From : </h2>
      <p>
        {firstname} {lastname} at {email}
      </p>  
    </div>

    <div>
    <h2 className="font-bold capitalize">Requesting Information about :</h2> 
    <p className="text-lg">{services}</p>
    </div>

    <div>
      <h2 className="font-bold capitalize">Message :</h2>
      <p className="text-lg">{message}</p>
    </div>
  </div>
  )
  
  export default ContactFormEmail