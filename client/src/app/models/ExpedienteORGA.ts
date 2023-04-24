
export interface ExpedienteORGA {
    id_expediente_orga?: number,
	num_exp_orga?: string,
    fecha_inicio?: Date,
    juzgado?: string,
	provincia_juzgado?: string,
	diligencias_juzgado?: string,
	grupo_interviene?: string,
	fecha_recepcion?: Date,
    estado_expediente?: string,
	uso_provisional_resuelto?: boolean,
	observaciones?: string,
	num_exp_cnp?: string
};