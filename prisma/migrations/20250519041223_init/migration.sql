-- CreateTable
CREATE TABLE "Projeto" (
    "id_projeto" INTEGER NOT NULL,
    "titulo_projeto" TEXT,
    "modalidade" TEXT,
    "unidade_origem" TEXT,
    "id_area" INTEGER NOT NULL,
    "id_coord" INTEGER NOT NULL,
    "data_inicio_projeto" DATE,
    "data_fim_projeto" DATE,
    "situacao" TEXT,
    "ultima_alteracao_projeto" DATE NOT NULL,
    "palavras_chave" TEXT,
    "resumo" TEXT,
    "parceria" TEXT,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id_projeto")
);

-- CreateTable
CREATE TABLE "Coordenador" (
    "id_coord" SERIAL NOT NULL,
    "nome_coord" TEXT,
    "email_coord" TEXT,

    CONSTRAINT "Coordenador_pkey" PRIMARY KEY ("id_coord")
);

-- CreateTable
CREATE TABLE "Area" (
    "id_area" SERIAL NOT NULL,
    "area_conhecimento" TEXT,
    "area_tematica" TEXT,
    "linha_tematica" TEXT,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id_area")
);

-- CreateTable
CREATE TABLE "ParticipanteProjeto" (
    "id_participante_projeto" SERIAL NOT NULL,
    "id_projeto" INTEGER NOT NULL,
    "tipo_participante" TEXT,
    "nome_participante" TEXT,
    "numero_total_participante" INTEGER NOT NULL,

    CONSTRAINT "ParticipanteProjeto_pkey" PRIMARY KEY ("id_participante_projeto")
);

-- CreateTable
CREATE TABLE "Curso" (
    "codigo_curso" TEXT NOT NULL,
    "campus" TEXT,
    "nivel" TEXT,
    "turno" TEXT,
    "nome_curso" TEXT,
    "modalidade" TEXT,
    "tipo_curso" TEXT,
    "numero_total_aluno" INTEGER NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("codigo_curso")
);

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_id_area_fkey" FOREIGN KEY ("id_area") REFERENCES "Area"("id_area") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_id_coord_fkey" FOREIGN KEY ("id_coord") REFERENCES "Coordenador"("id_coord") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteProjeto" ADD CONSTRAINT "ParticipanteProjeto_id_projeto_fkey" FOREIGN KEY ("id_projeto") REFERENCES "Projeto"("id_projeto") ON DELETE RESTRICT ON UPDATE CASCADE;
