
      let isConnectted = false;
      let port;
      let writer;
      

      async function SendToArduino() {
        if (!isConnectted) {
          alert("Make sure to connect Arduino.");
          return;
        }
        try {
          const encoder = new TextEncoder();
          await writer.write(encoder.encode(transcript));
        } catch (e) {
          console.log(e);
        }
      }
    
      

    async function Connect() {
      try {
        const filters = [
          { usbVendorId: 0x2341, usbProductId: 0x0043 },
          { usbVendorId: 0x2341, usbProductId: 0x0001 }
        ];

        port = await navigator.serial.requestPort({ filters });
        await port.open({ baudRate: 9600 });
        writer = port.writable.getWriter();
        isConnectted = true;
      } catch (e) {
        console.log(e);
      }
    }

    
  