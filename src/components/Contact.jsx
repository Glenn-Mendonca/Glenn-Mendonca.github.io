function Contact() {
  return (
    <form
      className="bg-light-primary dark:bg-dark-secondary p-4 m-2 rounded"
      action="https://formsubmit.co/bcea425628436566729644959e2796b8"
      method="POST"
    >
      <input
        type="hidden"
        name="_next"
        value="https://glenn-mendonca.github.io/"
      ></input>
      <div className="md:flex block md:gap-x-5">
        <input
          className="flex-1 w-full mb-4 p-2 rounded bg-light-secondary dark:bg-[#444448] placeholder:text-dark-secondary dark:placeholder:text-light-secondary dark:text-light-secondary text-dark-secondary"
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          className="flex-1 w-full mb-4 p-2 rounded bg-light-secondary dark:bg-[#444448] placeholder:text-dark-secondary dark:placeholder:text-light-secondary dark:text-light-secondary text-dark-secondary"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
      </div>
      <textarea
        name="message"
        rows="7"
        className="w-full p-2 rounded-md bg-light-secondary dark:bg-[#444448] placeholder:text-dark-secondary dark:placeholder:text-light-secondary dark:text-light-secondary text-dark-secondary"
        placeholder="Your Message"
        required
      ></textarea>
      <div className="flex justify-end mt-4 gap-x-4">
        <button
          className="py-2 px-4 rounded-md bg-[#303032] hover:bg-dark-primary text-light-secondary dark:text-dark-secondary dark:bg-light-secondary dark:hover:bg-light-primary transition-all duration-200 "
          type="reset"
        >
          Reset
        </button>
        <button
          className="py-2 px-4 rounded-md bg-[#303032] hover:bg-dark-primary text-light-secondary dark:text-dark-secondary dark:bg-light-secondary dark:hover:bg-light-primary transition-all duration-200"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
