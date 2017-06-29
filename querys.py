'''
    ProMan - part 2 TW assaignment
    queries module
    Contain the queries, saved to variables.
    by StormCoders
'''


get_boards_query = """SELECT id, title, state FROM boards_proman;"""

get_board_id_query = """SELECT id FROM boards_proman WHERE title = %s;"""

get_cards_query = """SELECT cards_proman.title, boards_proman.title
                FROM cards_proman
                INNER JOIN boards_proman
                ON cards_proman.board_id = boards_proman.id
                WHERE boards_proman.id = %s;"""


save_board = """INSERT INTO boards_proman (title, state) \
                    VALUES (%s, %s);"""

save_board_query = """INSERT INTO boards_proman (title, state) \
                    VALUES (%s, %s)"""


save_card_query = """INSERT INTO cards_proman (board_id, title, status) \
                    VALUES (%s, %s, %s)"""

