import React from "react";

function OtherUtilities() {
  return (
    <div className="flex flex-1 gap-5  items-center ">
      <div className=" flex flex-col items-center justify-center gap-2 border-slate-700 rounded-2xl border  h-44  w-56  gradi">
        <div className="flex w-full justify-between px-5   items-center ">
          <h1 className="text-slate-400 text-sm">Accessories</h1>
          <div className="pl-3 ">
            <svg
              viewBox="0 0 1024 1024"
              height={"18"}
              width={"18"}
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffffff"
                  d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="relative h-24 w-24">
        <div className="h-24 w-24 rounded-lg absolute overflow-hidden">
            <img
              className="object-fill "
              src="https://i.ibb.co/HPMm5kD/Headphones.png"
              alt=""
            />
          </div>
          <div
            className="h-14 w-32 -left-5 top-5 absolute z-0 gradi rounded-2xl"
            style={{ transform: "skew(-10deg, -10deg)" }}
          ></div>
        </div>
      </div>
      <div className=" border-slate-400 rounded-2xl h-44 flex-1 gradi flex flex-col justify-center items-center ">
          <div className="flex w-full justify-between px-5   items-center ">
            <h1 className="text-slate-400 text-sm">Library</h1>
            <div className="pl-3 ">
              <svg
                viewBox="0 0 1024 1024"
                height={"18"}
                width={"18"}
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-around w-full  ">

        <div className=" flex justify-between items-center mx-5">

          <div
            className=" flex gap-2 w-56 rounded-xl my-1  "
          >
           <div className="h-8 w-8 rounded-lg overflow-hidden">
            <img
              className=" object-contain scale-125 h-full"
              src="https://image.lexica.art/full_jpg/93f25e3d-a7a0-4633-bea8-be439ed038a2"
              alt=""
            />
          </div>
            <div className="flex flex-col  ">
              <h1 className="text-slate-300 text-xs">CyberPunk</h1>
              <h1 className="text-slate-500 text-2xs">PS4 & PS5</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">12 DEC</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
        <div className=" flex justify-between items-center mx-5">

          <div
            className=" flex gap-2 w-56  rounded-xl my-1  "
          >
            <div className="h-8 w-8 bg-black  rounded-lg overflow-hidden">
              <img
              className="object-fill"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISERgRERIYGBEYEhgYEhgYGBgZGBoZGRgZGRkYGBgcIS4lHB4sHxgYJjgmKy8xNTU1GiQ7QDs0QC40NjEBDAwMDw8PGhIRGDEhIyE0NjQ0NDQ0NDQ0NDQ0NDQ0MTE0MTE0NDQxNDQ0NDQ0MTQxNDQ0NDQxNDQxNDQ0ND80Mf/AABEIANMA7wMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAABBQIGBwj/xAA+EAACAQIEAwYDBwMDAwUBAAABAgADEQQSITEFQVETImFxgZEGMqEUI0JSYrHBM4LwcpLRU7LhFSSio/EH/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAAIDAQADAAAAAAAAAAAAAQIREiExUQNBYf/aAAwDAQACEQMRAD8A+OkyXlGVA6vJKkgXedAzidSjsGWDOBLEAgM7UwQM6BgGDTtTAgwimAdTO1M5pUKjC6oxHUAn9pNRoRY9DAOphFMAhhFMBhTCoYBDDIYDCxinFkMYSAzTjNOLU4zTlDVMRqmIrTjaShmmI1TEXpxqnCGEEOggkh0gdqJ2BKWdiUfm+SSSc1SXKkgWJYlSxA6lzkTqUQToTkQ+GpZ2C+ZPkIDOBwbVDvlXmTNzCcOopo1nPiLj2mK+Jy9xSbDpGcHxFaZuD7gH6GUe04ewW2TD0z0HdX/Paemp8NweITs62HCORzH1D2B9xPF8O+IKbd2rTQj8yjs2H+3Q+09VgGZQKlCoHT8jHX/PKEY/Gf8A+eOvfwr+ORzof9Ljn4N7zxVfD1KTmnURkqDdWFj/AOR4z7LQ40HBpjMHdLqhNiHQi4Vjp3gV0PQ9TbNxVTDcRoFKlI9qjlWRhZ11tmpt127v0Mm2pLrb5ahhkMY4vwt8M4UnMjXNN9swBsQRyYbERVDCGUMYQxVDGEMBymY1TiSGNUzKHKZjaGJU2jdMyh2mY1TMSptGkaEOoYdDFEaMI0BhTOwYBWhA0o/Ockkk5qkkkuBJckuUSWJJcC4xhDYseeWLCHwz2JvzEAbbzpFkY2MIcU5Fri3+lf8AiUN4bs1JFQuLgZGUAqDfXONyLW2m1gsbVwzBlIZCdCDdGt0PI/UTzwpu6kiHweMemNDbkwNipt+ZTodJR78cap4lACtqwZcpBs2py/3WDHxnNPFA4g0sW5Sqal6da9hqAFV7fh0Fn3HPrPM4bEUaqFsr0nQg50BdFN9CyE3UHwY+U9KVoY2jkevSNUD7tg+VrdCjhWPlaSzbWN0NxU1MRTehVUfa1JsDYCoy3sVI0WoV2Ozg23tPI4XDdpReqlyabJ2gtsj3UP1FnAU/6xNhkxFTBOlSjW+0YfL2NQI57SmGFhmtqV5EcrHlND4MwpSvWGLXuYjDFKoW1lNVwAbg2uWB22PlCX68qhjCGLZSrFTuCQfMGxhkMiHEaM02iSNGqbSh6m0bptM+m0aptAfptGkeII8YR5UPo8OjxFHhkeA8rzoPFFedh4HwKSXJMKkkkuBJYlCdCUSXJJAgm1iKCfYqNSmouruuLawLhy16ZJOoUpoLaXBvrG+E8Fo/YX4jiCzotXsqdJDlzPZTeo+6r3thqbHWJYLFMlQmmBZrqyEXRk2yMp3FhKMxx0nVIBdSAegO3qOc0+I8MyqcRRBNAMBUUm7UmOytzKnk3PY6zKZrwHV4jUHym3kqgftF6le5JbmLH+D6GCBHPofflKqkX020222Gn8QGMHjqlFsyOyE6MVYg/Teb2C4xhqpAxeHUtzen92x8SE7pPmpmbR4OatEVKFQVK2Y56AUhwtr5kue+PBdRM+mpB1Fuvgeh6QPbdpg6aqcLiq+Yut0fs9FzDN3rAA2vYlYXjHGlpXoUF7hdGLX1stjkJsL2ZQRyC5RqbmYXDuFVzZuwqZTYg5HtbqDbpCcUUZ7Ai+otbW4K6k+o08DE+rb1IAzksSdyxJ94RDA1T941ts7W9zO0MiG0aMI0TQxhGgOo0ZRoijRhHlD6PGEeII8OjyjQR4VHiKPCq8IeDzoVIoHlh4HxcySSTCoJcqWIFiXKliUXLlTa4PwR6lSmaoC0yO0yse89NbklVGoDZSoY2BvpeBq8Ixn2EGjWpmphq9JPtVI3GpGdXToyggXHSMU+AID9qwjGvhN2It2lPwqoOn5hoR0hUwhxOJJOttSdhnc6Dy3+k1cf8OvhkTF4Oq1OtkzvkOmtu6w2PkdJpGTxBqdNvtGF+VkyVUOq1EPzI46EW/eeW4nhUQipSuaDk5b6sjDem/iOR5j1npGx+Hqk/a0ejXJbNWoqDSPTPRGvmV3vtOf/AEpqStUYrWwT913pNnQjkTzpuu/eA6QPIqw5idAKTa9r9dvW0mPw/ZVGQNmUHusOY5HwMBTuTYAljsBqfQTKiJUKm6kgg6EEg+BB5HSbI4ulUgYtbvYDtVAD25F+T+Z1iVHg+Ja9qFS19boV/wC60Zq8Nr4dfvqJanu6MGUr45rXU+I00N5rV+BrG8NxAArJXd1OqVFdjt63UjwufASPjjiMi4g5cQuZS60yzVR3SuYLqXFiL21FrnczU4AKZUtTquSe8aTD7wqLgkKO7UAse8L7G4E0KyI/epBgD8rZWA9QRp6X9JCTbzWIwr027wNiTla1g3l4+E5Qz3GAwxNIrWph6bfN+IDf2Oh8dJk8Y+GWpg1cPd6Y1ZDq6jqPzr9R47wXqsRDDo0UQxhDIG0aHRomrQ6tKHEaGR4mjQyNAcV4RXiitCK8qGlqToPFg0meB8qkkkmFSWJUsSi45gcC1XOVKqtNM7sxIVQSFGwJJJIAAic9D8P0DUw+KpJ/UdaRp8sxVmcoL8yFNhztA5wPw+70HxTC9IZlp2JGdlvcjnYT0iMlPHM+goVcNTGFY/IUREXKOmVkykcivjGfhDjNOrTTA4gBQq5BfzP8W+vrqYv4RxVIFcNWR8IzZgjqrop65WBAP6haaQ18JcPUENUsBfOxB30sAD0sPr7O8axtPs3RCLXbLa3y5iwUAcrn2tE+EfDWNzAOlEUmtdksLC9yV13I0sR7T1NTgeBpJ3xTU/mdEYk+F/4jaafHMRgalRwiIStySdNz5z0OF4EKCdulZ6VXL+Aggn9anRl8DGuN4rD0WOTEpv8A9Gkv0Av9JnYHjivTqV6gD4elYAZFXtKjfKi90HxPQfQpTjdDC5UxOMpBahHcpUWKGuBoHYG/YpbmLluQE87U42+YrRVaCHZKV108X+Zj4k+kBxfF1K9QvUYs7HX30RRyAvYCex+GvhKhST7Vj2ViNRRJGVdL/eXOum/4Rre8W/B5RMBiMRZkpVKi8nKsV/3tp9Y4rYzC2e7rbubq62uWKstyLXZjqPxHrPW43iFTGMFpDJTAINQI+QADXIvzPpz7vgCLGJ18BhqNQI7vWNhfO+RBflZbdNj4SctLMbfHmsV9nqMr5Th6ndKlS3ZX3IG7Uje5BFxrrbeXicR27ZMddKoHcxCjOcvJayqfvVt+Md7rm2GzxbCYWopQEUa4UGmtyyGw0WyjuZgLFmIF8p6zyaGLTWmtg6hwr/d42srAi5oAKrf3CpZh4Eek9DR+NKirYqajfmdUQ/8A1gX9bzxqwqmNh/F4kVKjVFpqgY3yJfKDbW1+p19ZSmLKYVDIGVMMjRdTCKYDSNCo0WQwqtKGladhosrQqtAMGnWaBDToNKPmZkkMgmBcuVLlFz1J4NUw2ESuL5mFN6gvbIGzmmfDTnyLTN+FeFfa8WlI/wBMHPVPRFsW99B6zV+IuKVKld66tlXtCiryy62UrsRlUC0sB1rUcQhL0wa6ksHDlHyAD9JVzcnU9ZoYTH1qVFquFxlS6C9Sk6gsEJAzjUq6gkXtqL6i2swMLxKl3rr2DOhR3prnQqSCQabapqo+Q+k0sMrYektXuVVNa/aU2zIKRXI9J13UnMT3huBrKgzfGfESuVKzAEboqrp1uNphNxTFOBSNRyqs5PfYsS5u1ze7a3Ot9zNDCUBTFmsyrUYkEXWw0u35uWm2sUVOzfs0cWapYVADsulwo1sb32uTABiaeSmWqXB/ABbffvHy5DaavF6XZUqOEQfJTFSr41aovr4hLe8Tx9PM1Cne6Frm9rFS2Z/py85XFcealWqTbO9VvYtlX2UKIgP8MYDM4rvcIGsh00tq768lHPqSfwza4Uy47EhHYjCIbkajtCp7t+i32Hrvtk8SxuTDJhEAW4JqsL5jTvdUbkMzZmNvDqYzwystKh2gJUlhkNlN7NqLHloRA9d8S8XSigFEhMoAAtZWQ30B5W3vpb1nh2xRqqFA0Vbl7AO400AAFhoNbX6WvNHD8LrYwCvUNqRqIlNdgxZgoZr8rnQeHnNTFcHFJmWmlnCqRyuVO4zE6EXHr4TlfdPRjcZju+uOF0aVSllSmMw+bS4272brzuTPOcc4IaAFWmL0GJBF7mmwOUo36bggE+R1326dYU3yPSV8S1mp0VYEIdRmqPYBB4ak9IjxZ8UisHylGDXpooC3ZGUNexY2v1toNpuXccctcunmxO1MEjTtYQdTDKYsphkMA6mGUxdTCqYDCGEUxdDDKZQdTO1aBUwimAUGdAwQM6vA+dSSSCZFy5QlwNz4Z4qcMzkKLOoRm/Kupy3/AAgm2v6YrWxJKsrf9UN65WH8zVXDrQwaBx36qGq9/wAhNkHkQoP9886ux85oER9/MfvHsLWen96hs2bK3Rha9mHMeEzU2PkP3E0KIvRJ6VU/+St/xA1cXigLZdKboGHhcAOvuB7QdWpaoCxJOa+YWUkWHLly16CZ71LUwNylzb9J0Ppe3vOaxuqNbQrbcnUHmTz8OWkqHBWDCjfTI5Q+THfz7x9otQQtikFiT2i6AXJym509DCh89Ftrg3IHPS1/Sy+8XZ/vMyHUE2PO1z/BgGrcRNWu9RyWZ2JJO56fS07ZlzimLhLgsNL67AkDU2tE8KLFmKiwAGYg903B7pGmYgEa30zecqhWu1zve4Mmh9Xw3E0pYZKbkDJUplSdu6wI+gb3mVxvibGsqUm/9y4U5rkrTXUZ2XYkjZbW0udhfzTcZdU7+UlR92NbliNM2uw3i3DsUwY1WbNUdjmJ3zHnboRbwFrTPHtrldPYUuErSQkabtUdzqxOpZ3PPncxqzV1Xu2dNAX0z9Qqbm4HO22l49wRqeJVQxL1UF1X8AI1LKOotozXN72te0T+KKyUlXtKa9oXvQBa5PLOy27gUGxNzvbnNsvC8fwAoVrJ/TdA6A3BUG90IPQg28LRBTPZ/EnwxbBfbqbl6iOBiSSTdWsoYdAp5flJPKeJUzKjqYVTAKYRTAYUwqmLqYVTAYUwqmLqYVTAOphAYFTCKZQZTLBnAM6BgfPJcqQTI6E6AnIjvDqOZi5ByoATbqTYD2zH+0yhvi/EzXYuSNQAFGmQKLBAOgsLWmZT6dZdUC+m05Q6yjpefl/ImvhAn2OqT84r0bdMtnB+tpkNoTGKNUim6dSpPoTA3uH1kzU6dRrUK1M065ABOXO2Vr791iDp0iPE+FthS1OqQWzXplToyEXVx1RhseoI5QbDu0rHUq3p37TWwXEqL01wePRjRQt2NVP6tAsbnL+dCd0PmNoHnqFUi4HO/wC1pw7FTppNjF/DdRbvhqqYmla4amwDgfqpMcynyvMWvScGzKQfGAzRxKsjI4AY/K3rz+sElPKb5rEajWx8CvjzitoVXIFtx+0Dqo5Y6/55mNYZyuo/8eGsWSlcBhqL621I66S8+U3X5v8AOUI9HguLJRKO1MtUUKy0y1xnA+cm3dS5uF1Pjzm/QwK1qIrs5es62csdFHJUH4VBOgngqKEm51JN/wDOvnPTYbi9Onh2pVaebOMpS4IaxBWwtoRYeH82f0elp8V+z8OejiabuS4WmquSKzKGBplB3sgHzcreOk+aIdBrfxnpUZ6lRKrnMwsKIQ2WkoOw6H9yDEMfg+0LvTQK6D7ymoAGQBi1RB+VctiOXvM29tzC8eTOUwqmAUztTDJhTDIYuphVMA6GGQxZDDKYB1MKphW4e9Oka1YilTt3M+jOTsETe36iAPOL02uAeolBlM7BglM7BgeAklS5kXNpKITCo4YE1HbMNdCpZQOh0Un+6YsbweJIBpk2RiN9gb7+A6ywBaUIWqNfSDlHTj9paHfyhGotkD2OW5F7QMBpqui+Cn6m80eLlGxBNNcqtTRrcrlFv7m59Zi3j1eqDUVr/gQH00gN4dPvTTuRa+o30BO8RxCXykG5K3PnmYfsB7z0WGp06uPrlDlQUHenyBZKS9317x9JlY5Epphqi969DM+v4+0clT0tcCBkWlueUeFF62Z1UBRq1uQJyg6nrpApTVWGa2+t/wDLQOcCt8+jEBCTl525N4Wv7SBFOq7XGnrG6NbPWyIbBjlB5AHQm3lM0gjQixGhB3B5gwHKlYIwy/PqL30F9LabzrDNkbOTdr2Jvy1vaKU0zaA97p18vGdK9oR6XA1FUEADs2BNyBcoGDFPMWBvyvOcS5LU2WpkIdiWyh2AIKjNY3ymygjxvM/h+MUA06hJpk3tf5WtYMPpe1rxsHI2QkEFbqwsbi2a3gdxM5R1/HlJdXyoKWHV3bE0qqrnAqLSZAaRbW4urK6m4tta4A3EriHDFRBXw9UVsMTYtlyvTY7LVTXLfkwJB8DpD03N2JUlHzKNu9pZgw593KZn8GxQoYg0yc1CouRx1VgPqD+0s8ZzkmXQKGFUznE0ezd6e+ViL9QDofaXTF7kkBR8xOwhk3hKfaOqZguZgMx2A5k+AFz6RjG8YGHYPhUWzU1VXKgsroMjmxvlZiof+/SY44gDUC00Jp2YMdM7ZlK5gfw2vcDw1vJhOHg3zvYcu7e9tri+nvKHaKPW+/xLs7k/dhiT5t+w/wDyPqYBX0A5BQAPLf63PrCKZAdTOwYJTOwZR4KSVLmRcuczqBs8B4VUxjmkjoGUA2Y2JW9mKj8WUWNuk641wvsGAQ5kIuHsRc+uvLoJlYXEvSdaiMVdWupG4M9/h+IUeJ0CrAJi1UsyjZ+rIOfUjzmoD4LD0qWEQW7bCuA3aAXakxUM61APlAObXYZSDbn5z4j4PSpNmpN3SoPVddvFSbHqPKP4PBYzBsr0ms1Rc6IDcOh0uDtfqOlr8o1jeI8PxC5MTTqUKo+dqYGXNoCTTPd9ssqPENSYakaddx7jSc3nrD8I5lDYXHUnzgMEbPRcqdiUIPL95kY/gtej/UCf2up+g1+kmjYfDqhWoW1/pvfyKEH6Xh8NhTWWgmuXNUViPFgf5gcBwypVNkZVNiCGdE0/uIvN7AfCWPSziolNQe6xq0rXPQBjKEMfwcUUBVmAJtqRfbw8p5+qLG09Rxjh7In3+PR2B+RDm+qgC/rPM1CoOlyPGAXhyXcEnKt7M3gdwPE7Rritc4rFMyKFZjaxZVHcWxZnYgDRbkk20i2AAeogc2TML200vraaPHcKoftcOgVFpqa1mXus7MF7pN9UZAbC1yZFZWLwj0ahp1UKVF3FwfEEEGxHiDAqSPff/maWGx6ui0MSM1IHuOP6lMH8h5pfXIfG0Xx+CakwuQ1NtUdflceB69Ry8rEwLK3MbzWweKXKquMy5ibcwbW0PLT6gTLo0wzqpYKGdVLHZQSAWPgL3hsVRehVei4s6OyP0zIxFx4aGVGmcUos2cMFW2XXMNLXIPny6REOrYhMosM9x5XuP2izVwdWFyPK30EJgaoRzVfkDlHj/mnrA2eMIiVneocqXXKBbO5yLfKOQvfvH0vrbIZ3rkAgJTGyi9h58yfHeUaLsRWqg2qZmUn8YDFSV8MwI9IdTy5chIotFFUWUevOMKYuhhkMA6GGUxZTDKYB1MIDAKYRTKPDSSSTIuXOZYgdCEpVWRg6MVdTdSDYg9QYOSB7zgHxYr0/s2MfJr93VCr3QTe23cIN7MOpBinxHwmqKj1FXPTzXputjnU6hrDc23sLXivw+iYjCVMHmRa/aipSz2CvdQhTOdFfTu3/ADGI08TisG7Uwz02X50bQf7TofMbzW0IZj6jTx05Qgqt+Y+5npMH8TYeppjcLTqfryDP/uWzfWc42pwtx9zTdG5HtHsP7XzX95RgLUYbMZT1nO7tpt3j9I82FpaBa4PdBY7WJ3A8pf2SgN6w9Ln+BCsu0GZ6JKWERcxDu3UgKo9XIHqAZkY+srOSihRyAJb3YgX9BIBYdiHU2G40Og9TyE9disIycNq1we6+QFmHeqMzhSyg/KgBYDzPmfGIdZ618azcKq06huTURqRuDZQ1MZBz3VtOWsDyMewGOyBqbrnot869DyZeh/zTeJU0LEKoJYmygAkk9ABvPW4b4WFPCvWxBvWYFKdPkjE5QXP42vawGg315Zq6eYxdNUaytdCLqdCSp629vTYbDTGJo4pB9pfJiFUKKm4qKosuf9QUAX5gCZeIwuRQ3jlbwO49CP8AtbpOloMEDjKwK20INidNR1iVDVbh1OmMxrIegB19oi4zISoNhYe+xPTpGaWFFPECmxW2ZQxa1hcAm52BFyIdK6UvtFJFDo5yoxN7KrkqQOZ218JQbiiojilSqF6KgMgvcKzgF1B8wIqsCsKpgGUwqGAUwqmAwhhFMAphVMoOpnamBUwimB4uSSSZElypcCxLnIm3wvA00UYjE6pf7qnsahHNuiDrzgMfDmDdHGJqUWbDZWVl0BcMpXuK3zgEg9LjeaONrITbCYhGp/8AQrcv05KoIH9pgxxeozGox75GVQBZVQaBVXYCZGOdWNwNec0hxsVSvarw6kW5lHrUr+gYr9IvVrYU/Lg3U9PtBI9il/rFnqsgyKzBvxWY6fpGvvLo4qoe6ahy7m9j+4hVVKqX7lIKPFnb6ky1rP8AhAX/AEix995DWf8AP9F/4hKas3zVCPNj/EADUah1Knzbuj3aR8OAt84Y8wtzbzNrRo4amLEup7y33JsTa+vpNjhGHwhzCvUN8zAC4C2OoPXYiNDy1/CaOBR6yNSNQKoGdQVFrjxAzWtfb2nPEsOKbkKQV5EbEQHDntVXxNveBo4CqlGp92SSCAWPzGxPyj8INxp4T0FbiyojXszqSHYk9nTaxyotv6lU2HdGgsbnfL42oCHK3sLn1tfb9o0wLKuawCj7tV0VFPzN+12O/PlOeu3S5W4yT9EsTiWqNmYWuALDbwAH+fWDppe+moF/SFdxsu5+Y/wOg+p+k7wDqtRS4uhOV/8AS2h/eacwhLE7xNA06jIdSrWv1G4PqCD6zgSgiwiwQhFgEUwobmYG55bwNakW01Y+dlHpAep1AdtuXK/l1nYrXbKutvnPIeHnM/sKhub67Xvy/T084VENNNCS2gX8t2NvWA61Qlsicvnbp4DxjKxBcyDKuSwF2ZiSb8yR/wCYxhixHeNzuNLEDlcQPLSSSSCS5JIB8IgNRQRoXAI9RNjiJvWa/Jgo8ALAASSSwJFjm3lr83rJJKASCSSBRkvJJA6Tf0P7S+Q9ZckCm2lU9GHmJUkA+I/qt5/xOsQ5sFvoUBI8b7/SSSYvrU8padLJJNMm8fqEPPsl+l4uJJIHQhBJJA7WEWSSARZ0yAixF5JIHCUlDItu6RcjqRzMaWSSB//Z"
                alt=""
              />
            </div>
            <div className="flex flex-col   ">
              <h1 className="text-slate-300 text-xs">Demon's Souls</h1>
              <h1 className="text-slate-500 text-2xs">PS5</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">14 Nov</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
        <div className=" flex justify-between items-center mx-5">

          <div
            
            className=" flex gap-2 w-56  rounded-xl my-1  "
          >
            <div className="h-8 w-8 bg-black rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oY7lPmxClolYrff6JbY88bZSdnZ5IUhSJpsMXHNBM0lhd5vb0mjaZDBTbVW9EaAGDFY&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1  ">
              <h1 className="text-slate-300 text-xs">Overwatch</h1>
              <h1 className="text-slate-500 text-2xs">PS4</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-400 text-xs">12 DEC</h1>
            <h1 className="text-slate-500 text-2xs">2020</h1>
          </div>
          <button className=" border border-blue-700 text-blue-500 px-6 h-8 shadow-sm text-sm rounded-xl " >Download</button>
        </div>
          </div>

      </div>
    </div>
  );
}

export default OtherUtilities;
