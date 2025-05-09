import React from 'react';

const TouristCard = ({ imageUrl, name, timing, duration, pickup }) => {
    return (
        <div className="flex rounded-[8px] overflow-hidden w-[341px] h-[127px] ml-[4px] dark:bg-[#4D4D4D]">
            {/* Image Section */}
            <div className="w-[191px] h-[127px]">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover rounded-l-[12px]"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 w-[194px] h-[45px">
                <div className="font-bold text-lg "
                    style={{
                        fontFamily: 'Mont',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '15px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                    }}
                >
                    {name}
                </div>

                <div className=" w-[147px] h-[16px] mt-[8px]"
                    style={{
                        fontFamily: 'Mont',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                    }}
                >
                    Timing:
                    <span className="font-normal text-[#A6A6A6]"
                        style={{
                            fontFamily: 'Mont',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                        }}
                    >{timing}</span>
                </div>
                <div className=" w-[106px] h-[16px]"
                    style={{
                        fontFamily: 'Mont',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                    }}
                >
                    Duration:
                    <span className="font-normal text-[#A6A6A6]"
                        style={{
                            fontFamily: 'Mont',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                        }}
                    >{duration}</span>
                </div>
                <div className=" w-[119px] h-[16px]"
                    style={{
                        fontFamily: 'Mont',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                    }}
                >
                    Pick-up:
                    <span className="font-normal text-[#A6A6A6]"
                        style={{
                            fontFamily: 'Mont',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                        }}
                    >{pickup}</span>
                </div>
            </div>

        </div>
    );
};

export default TouristCard;
