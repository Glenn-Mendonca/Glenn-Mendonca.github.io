function Contact() {
  return (
    <form
      className="bg-light-secondary dark:bg-dark-secondary p-4 m-2 rounded-md"
      action="https://formsubmit.co/your@email.com"
      method="POST"
    >
      <div className="md:flex block md:gap-x-5">
        <input
          className="flex-1 w-full mb-4 p-1 rounded bg-[#444448] placeholder:text-light-secondary"
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          className="flex-1 w-full mb-4 p-1 rounded bg-[#444448] placeholder:text-light-secondary"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
      </div>
      <textarea
        name="message"
        rows="7"
        className="w-full p-1 rounded bg-[#444448] placeholder:text-light-secondary"
        placeholder="Your Message"
        required
      ></textarea>
      <div className="flex justify-end mt-4 gap-x-4">
        <button
          className="py-2 px-4 rounded-md bg-dark-secondary hover:bg-dark-primary text-light-secondary dark:text-dark-secondary dark:bg-light-secondary dark:hover:bg-light-primary"
          type="reset"
        >
          Reset
        </button>
        <button
          className="py-2 px-4 rounded-md bg-dark-secondary hover:bg-dark-primary text-light-secondary dark:text-dark-secondary dark:bg-light-secondary dark:hover:bg-light-primary"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
