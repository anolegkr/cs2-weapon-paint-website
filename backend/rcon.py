from valve.rcon import RCON

def give_skin(steam_id, skin):
    with RCON(("cs2-server", 27015), "rcon_password") as rcon:
        rcon.execute(f"give_skin {steam_id} {skin}")
