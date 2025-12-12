import sqlite3
import numpy as np
from sentence_transformers import SentenceTransformer

DB = "prompts.db"


def load_prompts():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()

    rows = cur.execute("SELECT id, prompt FROM prompts").fetchall()
    conn.close()
    return rows


def generate_embeddings(rows):
    model = SentenceTransformer("all-MiniLM-L6-v2")

    ids = []
    embeddings = []

    for _id, prompt in rows:
        emb = model.encode(prompt)
        ids.append(_id)
        embeddings.append(emb)

    return np.array(ids), np.array(embeddings)


if __name__ == "__main__":
    rows = load_prompts()
    ids, embeds = generate_embeddings(rows)

    np.save("prompt_ids.npy", ids)
    np.save("prompt_embeddings.npy", embeds)
