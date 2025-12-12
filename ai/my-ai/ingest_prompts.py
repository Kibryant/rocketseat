import os
import sqlite3

DB = "prompts.db"
FOLDER = "prompts/"  # pasta onde estão seus prompts .txt

conn = sqlite3.connect(DB)
cur = conn.cursor()


def create_table():
    cur.execute(
        """
    CREATE TABLE IF NOT EXISTS prompts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        medico TEXT,
        especialidade TEXT,
        prompt TEXT,
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """
    )
    conn.commit()


def ingest():
    create_table()

    for file in os.listdir(FOLDER):
        if file.endswith(".txt"):
            medico = file.split("_")[0]  # ex: "drjoao_endocrino.txt"
            especialidade = file.split("_")[1]

            with open(os.path.join(FOLDER, file), "r", encoding="utf-8") as f:
                texto = f.read()

            cur.execute(
                """
                INSERT INTO prompts (medico, especialidade, prompt)
                VALUES (?, ?, ?)
            """,
                (medico, especialidade, texto),
            )

    conn.commit()


if __name__ == "__main__":
    ingest()
