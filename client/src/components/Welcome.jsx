import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

import { Loader } from './'

const commonStyle = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-grey-400 text-sm font-light text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input placeholder={placeholder}
    type={type}
    value={value}
    name={name}
    steps="0.0001"
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const connectWallet = () => {

  }

  const handleSubmit = () => {

  };

  return (
    <div className="flex w-full justify-center item-center ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-10">
        <div className="flex flex-1 justify-start flex-col mf:mr-10 text-white ">
          <h1 className="text-3xl sm:text-5xl text-gradient py-1">Send Crypto <br />across the World</h1>
          <p className="text-left text-base font-light md:w-9/12 w-11/12 ">Explore the crypto world. Buy and sell cryptoscurrencies easily on Krypto.</p>
          <button type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 cursor-pointer hover:bg-[#2546bd] rounded-3xl">
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>
              Reliability
            </div>
            <div className={`${commonStyle}`}>
              Security
            </div>
            <div className={`sm:rounded-tr-2xl ${commonStyle}`}>
              Security
            </div>
            <div className={`sm:rounded-bl-2xl ${commonStyle}`}>
              Security
            </div>
            <div className={`${commonStyle}`}>
              Security
            </div>
            <div className={`rounded-br-2xl ${commonStyle}`}>
              Security
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 rounded-xl h-40 sm:w-72  w-full eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg">Etherium</p>
              </div>
            </div>
          </div>

          <div className="p-5 mt-6 sm:w-96 w-full h-full flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => { }} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => { }} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => { }} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={() => { }} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ?
              <Loader />
              : (<button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full border-[1px] p-2 rounded-full border-[#3d4f7c] cursor-pointer mt-3">
                Send Now
              </button>)
            }

          </div>
        </div>
      </div>


    </div>
  )

}

export default Welcome;
