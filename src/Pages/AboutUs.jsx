import MyContainer from "../components/MyContainer";

const AboutUs = () => {
    return (
        <MyContainer className={' flex flex-col justify-center items-center'}>
            <h2 className='text-xl font-semibold text-center my-5 '>About us</h2>
            <p className="w-1/2 text-center">
                Game Hub is collection of all your favorite games. Here you will find top most game for your entertainment.You can look forword to those game. And can easily install them and made your time more enjoyable.
            </p>
        </MyContainer>
    );
};

export default AboutUs;