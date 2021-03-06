module.exports = {
  queryRead: () => {
    let query = `SELECT b.id, b.title, b.author, b.image_url, s.novel_status AS status, g.genre 
      FROM novels b 
        INNER JOIN genres g 
          ON b.genre = g.genre_id 
        INNER JOIN novel_status s 
          ON b.status = s.status_id `;

    return query;
  },
  genreQueryAdd: () => {
    let q = `INSERT INTO genres (genre, created_at, updated_at)
                  SELECT * FROM (SELECT ?, ? AS d1, ? ) AS tmp
                  WHERE NOT EXISTS (
                    SELECT genre FROM genres WHERE genre = ?
                  ) LIMIT 1`;
    return q;
  }
};
