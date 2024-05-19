var input = document.getElementById('image') as HTMLInputElement
const inputText = document.createElement("input")
const imgPreview = document.createElement("img")

function readImage(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
        reader.readAsArrayBuffer(file);
        //    input.value = reader.result;
    }
    reader.readAsDataURL(file);
}


inputText.addEventListener('paste', e => {
    if (e.clipboardData) {
        input.files = e.clipboardData.files;
        input.dispatchEvent(new Event('change', { bubbles: true }));

        if (input.files) {
            const files = input.files
            const file = files[0]
            imgPreview.src = URL.createObjectURL(file)
        }

    }

});


navigator.clipboard.read().then(async data => {
    const clipboardContent = data[0];
    const blob = await clipboardContent.getType('image/png');
    // const file = new File([blob], 'image.png');
    const fileList = new FileList();
    var reader = new FileReader();

    reader.readAsArrayBuffer(blob)

    reader.onloadend = function () {
        console.log(reader.result)
        let newfile = new File([reader.result], 'image.png')

        fileList[0] = newfile
        
    }


});


const HandlePaste = (inputText: HTMLInputElement, input: HTMLInputElement) => {

    inputText.addEventListener('paste', e => {
        if (e.clipboardData) {
            input.files = e.clipboardData.files;
            input.dispatchEvent(new Event('change', { bubbles: true }));
            if (input.files) {
                const [file] = input.files
            }
        }
    });

}