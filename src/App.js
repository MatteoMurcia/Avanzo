import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable, { defaultThemes } from 'react-data-table-component';
import estado from './estado-cuenta-sebastian.json';
import Welcome from './components/Welcome/Welcome.tsx';
import Client from "./components/Client/Client.tsx";
import Money from "./components/Money/Money.tsx";

const customStyles = {
	header: {
		style: {
			minHeight: '56px',
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
		},
	},
	headCells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: 'white',
			},
		},
	},
	cells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: 'white',
			},
		},
	},
  rows: {
		style: {
			fontSize: '13px',
			fontWeight: 400,
			color: 'white',
			backgroundColor: 'rgba(29,142,212,255)',
			minHeight: '48px',
			'&:nth-of-type(odd)' :{
				backgroundColor:'rgba(8,94,154,255)'
			},
      '&:not(:last-of-type)': {
				borderBottomStyle: 'solid',
				borderBottomWidth: '1px',
				borderBottomColor: 'white',
			},
      '&:hover:enabled': {
				cursor: 'pointer',
			},
      '&:disabled': {
				color: 'rgba(152,199,228,255)',
			},
			'&:hover:not(:disabled)': {
				cursor: 'pointer',
				backgroundColor: 'rgba(152,199,228,255)',
			},
			'&:focus': {
				outline: 'none',
				backgroundColor: 'rgba(152,199,228,255)',
			},
		},
  },
  pagination: {
		style: {
			color: 'black',
			fontSize: '13px',
			minHeight: '56px',
			backgroundColor: 'rgba(220,222,229,255)',
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: 'white',
		},
		pageButtonsStyle: {
			borderRadius: '50%',
			height: '40px',
			width: '40px',
			padding: '8px',
			margin: 'px',
			cursor: 'pointer',
			transition: '0.4s',
			color: 'white',
			fill: defaultThemes.default.button.fill,
			backgroundColor: 'transparent',
			'&:disabled': {
				cursor: 'unset',
				color: defaultThemes.default.button.default,
				fill: defaultThemes.default.button.disabled,
			},
			'&:hover:not(:disabled)': {
				backgroundColor: defaultThemes.default.button.hover,
			},
			'&:focus': {
				outline: 'none',
				backgroundColor: defaultThemes.default.button.focus,
			},
		},
  },
};


const customStyles2 = {
	header: {
		style: {
			minHeight: '56px',
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
		},
	},
	headCells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
	cells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
};

const columnas = [
  {
    name:'Credito',
    selector:'credito',
    sortable: true
  },
  {
    name:'Empresa',
    selector:'empresa',
    sortable: true
  },
  {
    name:'Saldo Total',
    selector:'cuotas[0].saba_pago_total',
    sortable: true
  },
  {
    name:'Monto',
    selector:'monto',
    sortable: true
  }
]


const Expandedcolumnas = [
  {
    name:'ID Cuota',
    selector:'saba_id',
    sortable: true
  },
  {
    name:'Estado del Credito',
    selector:'saba_estado_credito',
    sortable: true
  },
  {
    name:'Fecha de Solicitud',
    selector:'saba_fecha_solicitud',
    sortable: true
  },
  {
    name:'Fecha de Pago',
    selector:'saba_fecha_pagocuota',
    sortable: true
  },
  {
    name:'Fecha de Pago Usuario',
    selector:'saba_fecha_pago_usuario',
    sortable: true
  },
  {
    name:'Valor a pagar',
    selector:'saba_valor_cuota',
    sortable: true
  },
  {
    name:'saldo',
    selector:'saba_dif',
    sortable: true
  }
]

const ExpandedComponent = ({ data }) => {
  return (
    <div>
      <DataTable
      columns={Expandedcolumnas}
      data={data.cuotas}
      customStyles={customStyles2}
      />
    </div>
  );
};



function App() {
  return (
    <>
    <div className='App'>
    <Welcome acco_hash={estado.acco_hash} lastName={estado.lastName} identificationId={estado.identificationId}></Welcome>
      <h1>Estado de Cuenta No. {estado.acco_hash}</h1>
      <br/>

    <div className='Info'>
    <div>
          <Client estado={estado}></Client>
        </div>
        <div>
          <Money estado={estado}></Money>
        </div>
    </div>
    
    <div className="table-responsive">
      <DataTable
      columns={columnas}
      data={estado.creditos}
      pagination
      expandableRows
      selector
      expandableRowsComponent={ExpandedComponent}
      customStyles={customStyles}
      />
      </div>
      </div>
    </>  
  );
}

export default App;
