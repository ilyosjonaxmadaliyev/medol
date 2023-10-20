import Button from "./Button";

function ModalForm ( { text, title, showModal, setShowModal } )
{
  const handleClick = () =>
  {
    setShowModal(false)
  }
  return (
    <>
      {showModal && (
        <div
          onClick={handleClick}
          className="modal-center bg-black/80 w-full h-screen fixed"
        ></div>
      )}
      <div className="modal-center">
        <div className="sm:p-10 p-4 flex items-center flex-col w-full sm:max-w-xl bg-white relative rounded-3xl ">
          <span
            onClick={handleClick}
            className="text-5xl absolute top-2 right-6 text-slate-500 cursor-pointer"
          >
            ×
          </span>
          <h4 className="text-center text-slate-500 mb-8 text-3xl font-semibold">
            {title}
          </h4>
          <form className="elements-center flex-col w-full mb-6 text-slate-800 text-xl">
            <input
              className="mb-6 outline-none border-none bg-slate-200 rounded-xl h-12 w-full px-3"
              type="text"
              placeholder="ФИО"
            />
            <input
              className="mb-6 outline-none border-none bg-slate-200 rounded-xl h-12 w-full px-3"
              type="number"
              placeholder="Номер телефона*"
            />
            <input
              className="mb-6 outline-none border-none bg-slate-200 rounded-xl h-12 w-full px-3"
              type="text"
              placeholder="Тема обращения*"
            />
            <textarea
              className="mb-6 outline-none border-none bg-slate-200 rounded-xl w-full px-3"
              cols="22"
              rows="4"
              placeholder="Сообщение*"
            ></textarea>
          </form>
          <div className="elements-center mb-8">
            <input type="checkbox" className="mr-4 w-4 h-4 bg-slate-400" />
            <p className="text-slate-500 leading-none">
              Отправляя заявку Вы соглашаетесь с политикой <br />{" "}
              конфиденциальности
            </p>
          </div>
          <span onClick={handleClick}>
            <Button text={text} link={"/"} />
          </span>
        </div>
      </div>
    </>
  );
}

export default ModalForm;
