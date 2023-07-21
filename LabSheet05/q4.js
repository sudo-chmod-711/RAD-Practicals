class Game {
  #theme
  #avatar
  #isStarted
  #status

  gameWon() {
    console.log("Won the game!")
  }

  gameLose() {
    console.log("Lose the game")
  }

  selectTheme(theme) {
    this.#theme = theme;
    console.log("Selected Theme : " + this.#theme)
  }

  selectAvatar(avatar) {
    this.#avatar = avatar;
    console.log("Selected Avatar : " + this.#avatar)
  }

  start() {
    if (!this.#isStarted) {
      this.#isStarted = true
      this.#status = "running"
      console.log("Game started!")
    }
    else
      console.log("EROR : Game already started!")
  }

  pause() {
    if (this.#isStarted) {
      if (this.#status == "running")
      console.log("Game paused!")
    else
      console.log("EROR : Game still paused!")
    }
    else
      console.log("EROR : Game not started yet!")
  }

  resume() {
    if (this.#isStarted) {
      if (this.#status == "pause")
      console.log("Game resumed!")
    else
      console.log("EROR : Game still running!")
    }
    else
      console.log("EROR : Game not started yet!")
  }

  cancel() {
    if (this.#isStarted) {
      this.#isStarted = false
      this.#status = null
      console.log("Game cancelled!")
    }
    else
      console.log("EROR : Game not started yet!")
  }
}

class CarGame extends Game {
  #winningScore = 100
  #score
  
  gameDecision() {
    if (this.#score >= this.#winningScore)
      super.gameWon()
    else
      super.gameLose()
    console.log("Wining Score : " + this.#winningScore)
    console.log("Your Score : " + this.#score)
  }
}

class PuzzleGame extends Game {
  #winningTime
  #time

  setTime(time) {
    this.winningTime = time;
    console.log("Challange Time : " + this.#winningTime)
  }

  gameDecision() {
    if (this.#time <= this.#winningTime)
      super.gameWon()
    else
      super.gameLose()
    console.log("Your Time : " + this.#time)
  }
}

class ShootingGame extends Game {
  #selectedMission
  #isComplete = false

  selectMission(mission) {
    this.#selectedMission = mission
    console.log("Selected Mission : " + this.#selectedMission)
  }

  completeMission() {
    if (this.#selectedMission)
      this.#isComplete = true
    else
      console.log("EROR : Did not select a mission yet!")
  }

  gameDecision() {
    if (this.#isComplete)
      super.gameWon()
    else
      super.gameLose()
  }
}

function $gamesuperclass() {
    document.write(
        "<center><img src=\"img/04/gamesuperclass.png\"></center>"
    )
}
function $control() {
    document.write(
        "<center><img src=\"img/04/control.png\"></center>"
    )
}
function $car() {
    document.write(
        "<center><img src=\"img/04/car.png\"></center>"
    )
}
function $puzzle() {
    document.write(
        "<center><img src=\"img/04/puzzle.png\"></center>"
    )
}
function $shooting() {
    document.write(
        "<center><img src=\"img/04/shooting.png\"></center>"
    )
}