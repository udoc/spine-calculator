document.addEventListener('DOMContentLoaded', function () {
    const pageCountInput = document.getElementById('pageCount');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    pageCountInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            calculateSpineThickness();
        }
    });

    calculateButton.addEventListener('click', calculateSpineThickness);

    function calculateSpineThickness() {
        const pageCount = parseInt(pageCountInput.value);
        const spineThickness = calculateThickness(pageCount);
        resultDiv.textContent = `Spine Thickness: ${spineThickness.toFixed(2)} mm`;
    }

    function calculateThickness(pageCount) {
        if (pageCount <= 400) {
            return (pageCount / 2) * 0.11;
        } else {
            return (pageCount / 2) * 0.06;
        }
    }
});
