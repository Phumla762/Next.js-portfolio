import Image from 'next/image';

 function Header(){
    return (
        <main className='header'>

            <Image
             src="/assets/images/profile.png" 
             className='dp' 
             alt="Phumla" 
             width={250} 
             height={250}
            />

            <h1 className='name'>Phumla Mazibuko</h1>

            <p className='about'>
                Frontend Web Developer
                </p>
                <div>
                <a href='/assets/images/Phumlas CV.png'>
                    My Curriculum Vitae 
                </a>
                </div>
            
            <style jsx>{`
            .header {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            .name {
                font-size: 2em;
                margin-top: 1rem;
            }

            .about {
                font-weight: 100;
                margin-bottom: 0;
            }

            .dp {
                border-radius: 50%;
                box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
                transition: transform 0.2s;
                cursor: pointer;
                border: 3px solid white;
            }

            .dp:hover {
                transform: scale(1.1);
                box-shadow: 0 2px 5px 0 #dfdfdf, 0 8px 40px 0 rgb(10 14 29 / 6%);
            }

            @media (max-width: 600px) {
                
                .about {
                    font-size: 0.9em;
                }
            }
            `}

            </style>
        </main>

    )
}

export default Header;