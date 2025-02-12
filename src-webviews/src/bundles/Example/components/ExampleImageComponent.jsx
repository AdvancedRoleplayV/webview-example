

const ExampleImageComponent = () => {
  const imagePath = "/assets/weapons/assaultrifle.png";

  return (
    <>
      <img src={imagePath} alt="Minha Imagem" /> <br/>
      <img src="/assets/weapons/assaultrifle.png" alt="Minha Imagem" />
    </>
  )
}

export default ExampleImageComponent;