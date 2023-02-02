import html2canvas from "html2canvas";

const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el, {
        scale: 2
    });
    const image = canvas.toDataURL("image/jpeg", 2.0);
    downloadImage(image, imageFileName);
    };
    
    const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    
    fakeLink.href = blob;
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
    };

    export default exportAsImage;