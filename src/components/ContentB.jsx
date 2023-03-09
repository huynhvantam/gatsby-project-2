import React from "react";
import { useState } from "react";
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
const ContentB = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <div className="bg-blue-500 h-[1000px] ">Content b


    <div class="relative">
      <input type="checkbox" id="toggle" class="absolute opacity-0 w-0 h-0" />
      <label for="toggle" class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Click me</label>
      <div class="content hidden absolute bg-gray-100 py-2 px-4 rounded mt-2">
        <p>This is the paragraph to be shown/hidden</p>
      </div>
    </div></div>

};

export default ContentB;
