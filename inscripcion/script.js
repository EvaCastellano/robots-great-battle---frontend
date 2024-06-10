document.addEventListener('DOMContentLoaded', function () {
    const numParticipantesSelect = document.getElementById('numParticipantes');
    const inputContainer = document.getElementById('inputContainer');

    numParticipantesSelect.addEventListener('change', function () {
        const numParticipantes = parseInt(numParticipantesSelect.value, 10);
        updateInputs(numParticipantes);
    });

    function updateInputs(num) {
        // Limpia el contenedor de inputs
        inputContainer.innerHTML = '';

        // Agrega los inputs correspondientes
        if (num === 2) {
            addParticipantInputs(2);
        } else if (num === 3) {
            addParticipantInputs(2);
            addParticipantInputs(3);
        }
    }

    function addParticipantInputs(participantNumber) {
        const colDiv1 = document.createElement('div');
        colDiv1.className = 'col';

        const formFloatingDiv1 = document.createElement('div');
        formFloatingDiv1.className = 'form-floating mb-3';

        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.className = 'form-control';
        input1.id = 'nomParticipante' + participantNumber;
        input1.placeholder = 'Nombre del Participante ' + participantNumber;

        const label1 = document.createElement('label');
        label1.htmlFor = 'nomParticipante' + participantNumber;
        label1.innerText = 'Nombre del Participante ' + participantNumber;

        formFloatingDiv1.appendChild(input1);
        formFloatingDiv1.appendChild(label1);
        colDiv1.appendChild(formFloatingDiv1);
        inputContainer.appendChild(colDiv1);

        const colDiv2 = document.createElement('div');
        colDiv2.className = 'col';

        const formFloatingDiv2 = document.createElement('div');
        formFloatingDiv2.className = 'form-floating mb-3';

        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.className = 'form-control';
        input2.id = 'apellidoParticipante' + participantNumber;
        input2.placeholder = 'Apellido del Participante ' + participantNumber;

        const label2 = document.createElement('label');
        label2.htmlFor = 'apellidoParticipante' + participantNumber;
        label2.innerText = 'Apellido del Participante ' + participantNumber;

        formFloatingDiv2.appendChild(input2);
        formFloatingDiv2.appendChild(label2);
        colDiv2.appendChild(formFloatingDiv2);
        inputContainer.appendChild(colDiv2);
    }

    // Inicializa con el valor seleccionado por defecto
    updateInputs(parseInt(numParticipantesSelect.value, 10));
});
