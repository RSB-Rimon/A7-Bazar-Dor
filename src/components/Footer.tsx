import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mt-10 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                
                <p>
                    যাবতীয় তথ্য — প্রয়োজনীয় পণ্যের জন্য এই ওয়েবসাইট।
                </p>

                <p>
                    সকল তথ্য সংরক্ষিত; ব্যবহারের জন্য নিজস্ব বিবেচনা প্রযোজ্য।
                </p>

            </div>
        </footer>
    );
};

export default Footer;