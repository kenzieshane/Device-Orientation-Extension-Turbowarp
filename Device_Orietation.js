// With help using @LilyMakesThings and @BlueDome77's extension as starting point.

(function (Scratch) {
  'use strict';

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPackaged = runtime.isPackaged;

  let allowJSCode = true;
  let ineditor = true;

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run unsandboxed');
  }
  
  class CustomJS {
    getInfo() {
      return {
        id: 'PhoneDeviceOr',
        name: 'Device Orientation',
        color1: '#AAAAAA',
        blocks: [
          // this is the main code.
          {
            opcode: 'getOrientation',
            blockType: Scratch.BlockType.REPORTER,
            text: 'device orientation',
            func: 'getOrientation'
          }
        ]
      };
    }

    // function to detect and return orientation
    getOrientation() {
      if (window.innerWidth > window.innerHeight) {
        return 'horizontal';
      } else {
        return 'vertical';
      }
    }
  }

  Scratch.extensions.register(new CustomJS());
})(Scratch);