import Button from "../components/ui/Button";
import Button2 from "../components/ui/Button2";

const About = () => {
  return (
    <div>
      <h3>we can change our style customising tailwind style.</h3>
      <h1 className="">About</h1>
      <h2 className="">About</h2>
      <h3 className="">About</h3>
      <button className="btn btn-primary ">Button-1</button>
      <button className="btn btn-danger">Button-2</button>
      <hr />
      <div className="h-screen w-full flex justify-center items-center">
        <div className=" size-20 bg-red-500 bg-green-500 mr-2 "></div>
        <Button outline={true}></Button>
        <div className="border border-red-300 p-10">
          <h4>reusable button with condition</h4>
          <Button2 />
        </div>
      </div>
    </div>
  );
};
export default About;
