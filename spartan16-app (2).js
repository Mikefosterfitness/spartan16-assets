
// ── ONLINE CLIENT PLAN DATA ─────────────────────────────────────────────────
const MODALITY_COLORS = {
  Strength:{c:'var(--gold)',bg:'rgba(201,168,76,0.07)'},
  EMOM:{c:'var(--emom)',bg:'rgba(224,112,64,0.07)'},
  AMRAP:{c:'var(--amrap)',bg:'rgba(74,154,122,0.07)'},
  IWT:{c:'var(--iwt)',bg:'rgba(74,154,201,0.07)'},
  Circuit:{c:'var(--circuit)',bg:'rgba(139,107,170,0.07)'},
  Power:{c:'var(--power)',bg:'rgba(201,90,74,0.07)'},
  Test:{c:'var(--red)',bg:'rgba(192,57,43,0.07)'},
  Recovery:{c:'var(--rec)',bg:'rgba(85,85,85,0.06)'},
  Conditioning:{c:'var(--cond)',bg:'rgba(74,154,201,0.07)'},
  Strongman:{c:'var(--circuit)',bg:'rgba(139,107,170,0.07)'},
};

const ONLINE_PHASES = [
// ════════════════════════════════════════════════════════════════
// PHASE 1 — THE FORGE
// ════════════════════════════════════════════════════════════════
{
  name:'The Forge', num:'Phase 01', weeks:'Weeks 1–4',
  desc:'Build the base. Condition the joints, prime the movement patterns, establish aerobic capacity. The Spartan must be shaped before he can be sharpened.',
  foci:['Movement Mastery','Aerobic Base','Tendon Conditioning','Body Composition'],
  weeks:[
  {
    label:'Week 1', name:'The Forge Begins', focus:'Establish movement quality. Build the base. Introduce the Spartan standard.',
    tags:['Foundation','Movement Quality','300 Test Open'],
    days:[
      {theme:'Phalanx',focus:'Defensive Stability & Foundation Strength',type:'Strength',mods:['Strength'],blocks:[
        {label:'Warm-Up',mod:'Strength',ex:[['Bear Crawl','3×20m','activate scapula'],['BW Squat','2×15','tempo 3-1-1'],['Hip 90/90 Stretch','2min','']]},
        {label:'Primary Compound',mod:'Strength',ex:[['Barbell Back Squat','4×8','@65% 1RM — depth + bracing'],['Trap Bar Deadlift','4×6','controlled eccentric'],['Push-Up','3×15','perfect form'],['Pull-Up','3×AMRAP','full ROM']]},
        {label:'Accessory',mod:'Strength',ex:[['Bulgarian Split Squat','3×10 each','BW or light DB'],['Farmers Walk','4×30m','heavy but controlled'],['Plank','3×45s','']]},
        {label:'Finisher',mod:'Strength',ex:[['KB Swing','3×20','hip hinge focus'],['Sit-Ups','3×20','']],scale:'Reduce all loads — same volume'},
      ]},
      {theme:'The Hunt',focus:'Pursuit Conditioning & Aerobic Engine',type:'Conditioning',mods:['IWT','Circuit'],blocks:[
        {label:'Hunt Protocol',mod:'IWT',fmt:'5 rounds: 400m run (or machine) / 2min rest. Record each split.',ex:[['400m Run / Machine','×5 rounds','threshold pace — note time'],['Med Ball Slam','3×15','max power between rounds']]},
        {label:'Chase Circuit',mod:'Circuit',ex:[['Sprints 40m','×8','walk-back recovery'],['Bear Crawl','3×20m',''],['BW Squat','3×20','']],scale:'Reduce sprint to 25m'},
      ]},
      {theme:'The Spear',focus:'Upper Body Push Power & Press Strength',type:'Strength',mods:['Strength'],blocks:[
        {label:'Primary Push',mod:'Strength',ex:[['Bench Press','4×8','@65% 1RM'],['Push Press','4×6','explosive drive'],['Dips','4×AMRAP','full depth'],['Plyo Push-Up','3×8','controlled landing']]},
        {label:'Shoulder & Rotation',mod:'Strength',ex:[['Landmine Clean & Press','3×8 each','light — technique focus'],['Landmine Rotation','3×12 each','hip-driven'],['Unsupported Lying Plate Rotation','3×10 each','slow & controlled']]},
        {label:'TRX Finisher',mod:'Circuit',ex:[['TRX Bodysaw','3×12','anti-extension'],['TRX Pendulum','3×10 each','core control']],scale:'Standard push-up + lighter loads'},
      ]},
      {theme:'Krypteia',focus:'Strongman Endurance & Mental Fortitude',type:'Strongman',mods:['Circuit'],blocks:[
        {label:'Strongman Circuit',mod:'Circuit',fmt:'3 rounds — rest 90s between.',ex:[['Tyre Flip','5×5 flips','explosive hip — not a back lift'],['Sledgehammer Slam','4×15','alternating sides'],['Farmers Walk','4×40m','heavy'],['KB Swing','3×20','hip snap']]},
        {label:'Core Warfare',mod:'Circuit',ex:[['Med Ball Slam','4×12','max power'],['Landmine Rotation','3×12 each',''],['Turkish Get-Up','2×5 each','slow and steady']],scale:'3 tyre flips · 10 slams each'},
      ]},
      {theme:'Agoge',focus:'Rotational Power & Athletic Movement',type:'Conditioning',mods:['EMOM','Circuit'],blocks:[
        {label:'Rotational Power EMOM',mod:'EMOM',fmt:'EMOM 12 — alternating: Odd → 8 Landmine Rotation each. Even → 10 TRX Power Pull each.',ex:[['Landmine Rotation','8 each — odd mins','accelerate!'],['TRX Power Pull','10 each — even mins','rotate and drive']]},
        {label:'Athletic Conditioning',mod:'Circuit',ex:[['Ski Erg / Row','5×250m','90s rest'],['Sprint Ladder 10-20-30-20-10m','×3 sets','max pace'],['Plyo Push-Up','3×10','']]},
        {label:'Core',mod:'Circuit',ex:[['Med Ball Rotational Throw','3×8 each','max velocity into wall'],['Sit-Ups','3×25','']],scale:'Lighter loads throughout'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 2', name:'Load Increases', focus:'All loads up from Week 1. Same movements, more weight. Build the habit.',
    tags:['Load Up','Volume Increase','Habit Building'],
    days:[
      {theme:'Phalanx',focus:'Defensive Stability — Load Increase',type:'Strength',mods:['Strength'],blocks:[
        {label:'Primary Compound',mod:'Strength',ex:[['Barbell Back Squat','4×8','@70% — add 2.5–5kg'],['Trap Bar Deadlift','4×6','@70%'],['Pull-Up','4×AMRAP',''],['Push-Up','4×20','']]},
        {label:'Accessory',mod:'Strength',ex:[['Bulgarian Split Squat','3×12 each','+5kg DB'],['Farmers Walk','4×35m','heavier'],['Barbell Hip Thrust','3×12','3s hold']]},
        {label:'Finisher',mod:'Circuit',ex:[['KB Swing','4×20',''],['Bear Crawl','3×25m','']],scale:'Reduce load — maintain form'},
      ]},
      {theme:'The Hunt',focus:'Pursuit — Extended Chase',type:'Conditioning',mods:['IWT'],blocks:[
        {label:'IWT Block — 4 Rounds',mod:'IWT',fmt:'4 rounds: 800m machine / 2.5min rest. Beat Week 1 splits.',ex:[['Machine Effort 800m','×4','2.5min rest — push the pace'],['Ski Erg 300m','×3','90s rest']]},
        {label:'Metabolic Finisher',mod:'Circuit',ex:[['Sprints 40m','×10','walk-back'],['Med Ball Slam','3×15',''],['BW Squat','2×30','']],scale:'500m if 800m is too much'},
      ]},
      {theme:'The Spear',focus:'Upper Body Push — Volume Up',type:'Strength',mods:['Strength'],blocks:[
        {label:'Primary Push',mod:'Strength',ex:[['Bench Press','5×5','@72%'],['Push Press','4×6','heavier than W1'],['Dips','4×AMRAP weighted',''],['Miko Bench Press','3×10','chest stretch focus']]},
        {label:'Rotation & Core',mod:'Strength',ex:[['Landmine Clean & Press','4×8 each','heavier'],['Landmine Rotation','4×12 each',''],['Plate Rotation (unsupported lying)','3×12 each','']]},
        {label:'TRX',mod:'Circuit',ex:[['TRX Power Pull','3×12 each',''],['TRX Bodysaw','3×12',''],['Plyo Push-Up','3×10','']],scale:'DB bench + reduce all loads'},
      ]},
      {theme:'Krypteia',focus:'Strongman — Tyre & Hammer Volume Up',type:'Strongman',mods:['Circuit','AMRAP'],blocks:[
        {label:'Strongman Block',mod:'Circuit',ex:[['Tyre Flip','6×5','minimal rest'],['Sledgehammer Slam','5×15','alternate'],['Sandbag / Atlas Carry','4×20m',''],['Farmers Walk','3×50m','']]},
        {label:'AMRAP Finisher',mod:'AMRAP',fmt:'AMRAP 12 — record rounds.',ex:[['KB Swing 24kg','10 reps',''],['Med Ball Slam','8 reps',''],['Bear Crawl','15m','']],scale:'Lighter KB · 4 tyre flips'},
      ]},
      {theme:'Agoge',focus:'Athletic Rotational Power — Week 2',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'3-Way EMOM',mod:'EMOM',fmt:'EMOM 12 — Min A → 6 DB Snatch each. Min B → 8 Landmine C&P each. Min C → 10 KB Swing 24kg. ×4 rounds.',ex:[['DB Snatch','6 each — min A','single arm — explosive'],['Landmine Clean & Press','8 each — min B',''],['KB Swing 24kg','10 — min C','']]},
        {label:'Sprint AMRAP',mod:'AMRAP',fmt:'AMRAP 15 — record rounds.',ex:[['Machine Sprint 250m','max pace',''],['Box Jump / Broad Jump','8 reps','full extension']]},
        {label:'Core',mod:'Circuit',ex:[['TRX Pendulum','3×12 each',''],['TRX Bodysaw','3×15',''],['Sit-Ups','3×30','']],scale:'Reduce loads · step-up not jump'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 3', name:'Intensity Climbs', focus:'Heavier loads, more volume. The base is solid — now we build on it.',
    tags:['@75%+','Volume Peak','Mental Fortitude'],
    days:[
      {theme:'Phalanx',focus:'Strength — @75% Loading',type:'Strength',mods:['Strength'],blocks:[
        {label:'Heavy Day',mod:'Strength',ex:[['Barbell Back Squat','5×5','@75%'],['Barbell Deadlift','4×5','@75% — full reset each rep'],['Weighted Pull-Up','4×6','add 5kg'],['Push-Up','4×25','']]},
        {label:'Accessory',mod:'Strength',ex:[['Walking Lunge','3×12 each','heavy DBs'],['Farmers Walk','5×40m','heavier'],['Trap Bar Deadlift','3×8','']]},
        {label:'Finisher',mod:'EMOM',fmt:'EMOM 8 — odd → 10 KB Swing. Even → 8 Box Jump.',ex:[['KB Swing','10 reps — odd mins',''],['Box Jump','8 reps — even mins','full extension']],scale:'Reduce loads — same volume'},
      ]},
      {theme:'The Hunt',focus:'Endurance Chase — Distance Up',type:'Conditioning',mods:['IWT','AMRAP'],blocks:[
        {label:'Aerobic Hunt',mod:'IWT',fmt:'5km run or machine equivalent — for time. Record.',ex:[['5km Run / Machine','×1 for time','threshold pace — record'],['Rowing 2km','steady state','note time'],['Ski Erg','4×400m','90s rest']]},
        {label:'AMRAP Finisher',mod:'AMRAP',fmt:'AMRAP 12.',ex:[['Sprint 30m','×1',''],['Broad Jump','5 reps',''],['Bear Crawl','15m',''],['BW Squat','10 reps','']],scale:'3km if 5km is too much'},
      ]},
      {theme:'The Spear',focus:'Upper Push Strength — Heavy',type:'Strength',mods:['Strength'],blocks:[
        {label:'Pressing Power',mod:'Strength',ex:[['Bench Press','5×5','@77%'],['Push Press','5×4','explosive'],['Dips','5×AMRAP',''],['Plyo Push-Up','4×10','']]},
        {label:'Overhead & Rotation',mod:'Strength',ex:[['Landmine Clean & Press','4×8 each','heavier'],['Miko Bench Press','3×10',''],['Landmine Rotation','4×15 each',''],['Plate Rotation','3×15 each','']]},
        {label:'TRX',mod:'Circuit',ex:[['TRX Power Pull','4×10 each',''],['TRX Bodysaw','3×15',''],['TRX Pendulum','3×12 each','']],scale:'Reduce loads — same pattern'},
      ]},
      {theme:'Krypteia',focus:'Strongman — Intensity Up',type:'Strongman',mods:['AMRAP'],blocks:[
        {label:'Strongman AMRAP 20',mod:'AMRAP',fmt:'AMRAP 20 — max rounds. Record score — beat it Phase 2.',ex:[['Tyre Flip','5 reps','explosive'],['Sledgehammer Slam','10 each side','alternate'],['Farmers Walk','30m','heavy'],['Med Ball Slam','8 reps','']]},
        {label:'Core Power',mod:'Circuit',ex:[['Landmine Rotation','4×12 each','heaviest yet'],['Turkish Get-Up','3×5 each',''],['KB Swing','5×20','']],scale:'Lighter loads · 3 flips'},
      ]},
      {theme:'Agoge',focus:'Explosive Rotational Power — Peak W3',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'5-Way Power EMOM',mod:'EMOM',fmt:'EMOM 15 — 5-way rotating. A→6 DB Snatch each. B→8 Landmine C&P each. C→10 KB Swing 28kg. D→6 Broad Jumps. E→8 Box Jumps. ×3 rounds.',ex:[['DB Snatch','6 each — min A',''],['Landmine Clean & Press','8 each — min B','heavier than W2'],['KB Swing 28kg','10 — min C',''],['Broad Jump','6 — min D','max distance'],['Box Jump','8 — min E','full extension']]},
        {label:'Sprint AMRAP — Beat W2',mod:'AMRAP',fmt:'AMRAP 18 — beat Week 2 score.',ex:[['Machine Sprint 300m','max pace',''],['Box Jump','10 reps','']]},
        {label:'Rotational Finisher',mod:'Circuit',ex:[['Med Ball Rotational Throw','5×8 each','max velocity'],['TRX Pendulum','3×15 each',''],['Plank','3×60s','']],scale:'Reduce all loads · step-up not jump'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 4 — Deload + Test', name:'Deload + 300 Test', focus:'Absorb the work. Sharpen. Then leave everything on the floor.',
    tags:['Deload','300 Test','Phase Close'],
    isDeload:true,
    days:[
      {theme:'300 Test — Opening',focus:'Phase 1 benchmark — record your baseline time',type:'Test',mods:['Test'],is300:true,
       note:'Set up all equipment before session. Bar at 60kg on floor. KB stations ready. Box at 24". Stagger if group format.'},
      {theme:'Deload — Active Recovery',focus:'Mobility, movement, flush',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Active Recovery',mod:'Recovery',ex:[['30min Steady Run','Zone 2','conversational pace'],['BW Squat','2×20',''],['Bear Crawl','3×20m',''],['Farmers Walk','2×30m','light']]},
        {label:'Mobility',mod:'Recovery',ex:[['Turkish Get-Up','2×3 each','very light — meditative'],['Hip Mobility Circuit','10min','thoracic focus'],["World's Greatest Stretch",'2×8 each','']]},
      ]},
      {theme:'Deload — Light Push',focus:'Maintain movement, flush fatigue',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Light Press',mod:'Recovery',ex:[['Push-Up','3×15',''],['Dips','3×10',''],['Pull-Up','3×8',''],['Lunges','2×10 each','']]},
        {label:'Light Conditioning',mod:'Recovery',ex:[['Rowing','1500m easy',''],['Ski Erg','2×300m easy',''],['Sit-Ups','3×20','']]},
      ]},
      {theme:'Deload — Skill & Feel',focus:'Skill work — feel good session',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Skill Work',mod:'Recovery',ex:[['KB Swing','3×15','light'],['DB Snatch','2×5 each','light'],['Turkish Get-Up','3×3 each',''],['Bear Crawl','3×20m','']]},
        {label:'Light Cardio',mod:'Recovery',ex:[['20min Run','easy pace',''],['Rowing','1000m easy','']]},
      ]},
      {theme:'300 Test — Final',focus:'Beat your opening time. Enter Phase 2 — Armour.',type:'Test',mods:['Test'],is300:true,
       note:'Beat your Phase 1 opening time. Record. Post the results. This is the first proof of what The Forge built.'},
      {rest:true},{rest:true},
    ]
  },
  ]
},

// ════════════════════════════════════════════════════════════════
// PHASE 2 — ARMOUR
// ════════════════════════════════════════════════════════════════
{
  name:'Armour', num:'Phase 02', weeks:'Weeks 5–8',
  desc:'Forge the armour. Build structural strength, dense muscle, powerful posterior chain. The Spartan\'s body becomes his shield. Loads increase, movement quality paramount.',
  foci:['Maximal Strength','Hypertrophy','Posterior Chain','Structural Integrity'],
  weeks:[
  {
    label:'Week 5', name:'Iron Begins', focus:'Load up 5–10% across all sessions. New strength standards from here.',
    tags:['@80% Loading','Weighted Pull-Ups','Armour Forged'],
    days:[
      {theme:'Iron Shield',focus:'Heavy Lower Compound & Posterior Chain',type:'Strength',mods:['Strength'],blocks:[
        {label:'Primary Strength',mod:'Strength',ex:[['Barbell Back Squat','5×5','@80%'],['Barbell Deadlift','4×4','@80%'],['Trap Bar Deadlift','3×6',''],['Bulgarian Split Squat','4×8 each','DBs added']]},
        {label:'Accessory',mod:'Strength',ex:[['Farmers Walk','5×40m','heavy'],['KB Swing','4×20',''],['Weighted Lunge','3×12 each','']]},
        {label:'Core Armour',mod:'Circuit',ex:[['Turkish Get-Up','3×5 each',''],['Plank Variations','3×60s',''],['Barbell Hip Thrust','4×10','']],scale:'Reduce loads — maintain volume'},
      ]},
      {theme:'The Siege',focus:'Conditioning — Sustained Output',type:'Conditioning',mods:['IWT','Circuit'],blocks:[
        {label:'Siege Conditioning',mod:'IWT',fmt:'IWT — 4 rounds: 500m machine / immediately → 10 Push Press + 8 Pull-Ups. Rest 90s. ×4.',ex:[['Machine Effort 500m','max pace','transition immediately'],['Barbell Push Press','10 reps','moderate load'],['Pull-Up','8 reps','']]},
        {label:'Battle Circuits',mod:'Circuit',ex:[['Tyre Flip','5×6','explosive'],['Sledgehammer Slam','4×20','alternate'],['Bear Crawl','3×30m','']],scale:'300m · lighter push press'},
      ]},
      {theme:'The Breastplate',focus:'Upper Body Strength — Push & Pull Balance',type:'Strength',mods:['Strength'],blocks:[
        {label:'Push Power',mod:'Strength',ex:[['Bench Press','5×5','@80%'],['Push Press','4×5','@80%'],['Dips','4×AMRAP + weight',''],['Miko Bench Press','4×10','']]},
        {label:'Pull Strength',mod:'Strength',ex:[['Weighted Pull-Up','5×5','+10kg'],['TRX Power Pull','4×12 each',''],['Plyo Push-Up','4×10','']]},
        {label:'Rotation',mod:'Circuit',ex:[['Landmine Clean & Press','4×8 each',''],['Landmine Rotation','4×12 each',''],['Unsupported Plate Rotation','3×12','']],scale:'Reduce all loads'},
      ]},
      {theme:'Krypteia',focus:'Strongman Hypertrophy',type:'Strongman',mods:['AMRAP','Circuit'],blocks:[
        {label:'Strongman AMRAP 20',mod:'AMRAP',fmt:'AMRAP 20 — beat Phase 1 score.',ex:[['Tyre Flip','5 reps',''],['Sledgehammer Slam','10 each side',''],['Farmers Walk','30m','heavy'],['KB Swing 24kg','10 reps','']]},
        {label:'Power Endurance',mod:'Circuit',ex:[['Med Ball Slam','5×15',''],['Landmine Rotation','4×15 each',''],['Turkish Get-Up','3×5 each','']],scale:'Lighter loads throughout'},
      ]},
      {theme:'Ares Strike',focus:'Explosive Rotational Power',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'Olympic Complex EMOM',mod:'EMOM',fmt:'EMOM 12 — 3-way rotating. A→6 DB Snatch each. B→8 Landmine C&P each. C→10 KB Swing 24kg. ×4 rounds.',ex:[['DB Snatch','6 each — min A',''],['Landmine Clean & Press','8 each — min B',''],['KB Swing 24kg','10 — min C','']]},
        {label:'Rotational Power',mod:'Circuit',ex:[['Med Ball Rotational Throw','5×10 each','max velocity'],['Landmine Rotation','4×15 each','heavier'],['TRX Pendulum','4×12 each','']]},
        {label:'Sprint AMRAP — Beat W3',mod:'AMRAP',fmt:'AMRAP 15 — beat Phase 1 score.',ex:[['Machine Sprint 250m','max pace',''],['Box Jump','10 reps','']],scale:'Reduce loads · step-up'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 6', name:'Armour Thickens', focus:'Volume increase across all stations. AMRAP benchmarks must be beaten.',
    tags:['Volume Up','@82%','AMRAP Benchmarks'],
    days:[
      {theme:'Iron Shield',focus:'Strength — Volume Up',type:'Strength',mods:['Strength'],blocks:[
        {label:'Heavy Compound',mod:'Strength',ex:[['Barbell Back Squat','5×4','@82%'],['Barbell Deadlift','4×4','@82%'],['Trap Bar Deadlift','4×5',''],['Bulgarian Split Squat','4×10 each','']]},
        {label:'Accessory Power',mod:'Strength',ex:[['Farmers Walk','5×50m',''],['KB Swing','5×20',''],['Barbell Hip Thrust','4×10','']]},
        {label:'Core',mod:'Circuit',ex:[['Turkish Get-Up','3×5 each',''],['Bear Crawl','3×30m','']],scale:'Reduce loads — same volume'},
      ]},
      {theme:'The Siege',focus:'Conditioning — Aerobic Power Up',type:'Conditioning',mods:['IWT','AMRAP'],blocks:[
        {label:'IWT — 2km Time Trial',mod:'IWT',fmt:'2km machine effort — for time. Record. This is a recurring benchmark.',ex:[['2km Machine Effort','1 attempt — for time','max sustainable pace — record']]},
        {label:'Metabolic AMRAP',mod:'AMRAP',fmt:'AMRAP 15 — all kit.',ex:[['Sprint 100m','×1',''],['Tyre Flip','5 reps',''],['Med Ball Slam','10 reps',''],['Bear Crawl','20m','']],scale:'500m time trial if 2km too much'},
      ]},
      {theme:'The Breastplate',focus:'Upper Strength — Load Increases',type:'Strength',mods:['Strength'],blocks:[
        {label:'Pressing',mod:'Strength',ex:[['Bench Press','5×4','@83%'],['Push Press','5×4',''],['Dips','5×AMRAP weighted',''],['Plyo Push-Up','4×12','']]},
        {label:'Pulling',mod:'Strength',ex:[['Weighted Pull-Up','5×5','+12kg'],['TRX Power Pull','4×12 each',''],['Miko Bench Press','3×12','']]},
        {label:'Rotation',mod:'Circuit',ex:[['Landmine Clean & Press','5×8 each','heavier'],['Landmine Rotation','4×15 each',''],['Plate Rotation','4×12 each','']],scale:'Reduce loads'},
      ]},
      {theme:'Krypteia',focus:'Strongman — Max Effort',type:'Strongman',mods:['AMRAP'],blocks:[
        {label:'Max Effort AMRAP 25',mod:'AMRAP',fmt:'AMRAP 25 — beat W5 score.',ex:[['Tyre Flip','5 reps',''],['Sledgehammer Slam','12 each side',''],['Farmers Walk','30m','heavier'],['KB Swing 28kg','10 reps','']]},
        {label:'Metabolic Finisher',mod:'Circuit',ex:[['Med Ball Slam','5×15',''],['Bear Crawl','4×30m',''],['Battle Ropes (if available)','4×30s waves','']],scale:'Lighter loads'},
      ]},
      {theme:'Ares Strike',focus:'Power & Speed',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'Explosive Complex EMOM',mod:'EMOM',fmt:'EMOM 12 — 3-way. A→6 DB Snatch each. B→8 Landmine C&P each. C→10 KB Swing 28kg. ×4 rounds.',ex:[['DB Snatch','6 each — min A','heavier than W5'],['Landmine Clean & Press','8 each — min B',''],['KB Swing 28kg','10 — min C','']]},
        {label:'Sprint AMRAP',mod:'AMRAP',fmt:'AMRAP 18 — beat W5 score.',ex:[['Machine Sprint 300m','max pace',''],['Box Jump','10 reps','']]},
        {label:'Core',mod:'Circuit',ex:[['TRX Pendulum','4×15 each',''],['TRX Bodysaw','4×15',''],['Sit-Ups','4×30','']],scale:'Reduce loads · step-up'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 7', name:'Peak Armour', focus:'Peak strength week. Highest loads of Phase 2. Maximum output.',
    tags:['@87–88%','Peak Strength','Near-Maximal'],
    days:[
      {theme:'Iron Shield',focus:'Peak Strength Week',type:'Strength',mods:['Strength'],blocks:[
        {label:'Max Strength',mod:'Strength',ex:[['Barbell Back Squat','5×3','@87%'],['Barbell Deadlift','3×3','@87%'],['Trap Bar Deadlift','3×4','heavy'],['Weighted Pull-Up','5×4','+15kg']]},
        {label:'Accessory',mod:'Strength',ex:[['Bulgarian Split Squat','4×10 each','heavy DBs'],['Farmers Walk','5×50m',''],['Barbell Hip Thrust','4×10','']]},
        {label:'Core',mod:'Circuit',ex:[['Turkish Get-Up','4×5 each',''],['KB Swing 28kg','4×25','']],scale:'Reduce loads — same volume'},
      ]},
      {theme:'The Siege',focus:'Sustained Combat Output',type:'Conditioning',mods:['IWT'],blocks:[
        {label:'IWT — Long Effort',mod:'IWT',fmt:'5 rounds: 600m machine / immediately → 8 DB Thrusters + 6 Pull-Ups. Rest 2min.',ex:[['Machine Effort 600m','max pace','transition immediately'],['DB Thruster','8 reps','squat to press'],['Pull-Up / Band','6 reps','']]},
        {label:'Battle Conditioning',mod:'Circuit',ex:[['Sprints 200m','×8','75s rest'],['Tyre Flip','5×8',''],['Sledgehammer Slam','5×20','']],scale:'400m effort · lighter thruster'},
      ]},
      {theme:'The Breastplate',focus:'Peak Upper Strength',type:'Strength',mods:['Strength'],blocks:[
        {label:'Max Press',mod:'Strength',ex:[['Bench Press','4×3','@88%'],['Push Press','4×3','max effort'],['Weighted Dips','5×AMRAP',''],['Plyo Push-Up','4×12','']]},
        {label:'Pull',mod:'Strength',ex:[['Weighted Pull-Up','5×4','+15kg'],['TRX Power Pull','4×15 each',''],['Miko Bench Press','4×10','']]},
        {label:'Rotational',mod:'Circuit',ex:[['Landmine Clean & Press','5×8 each',''],['Landmine Rotation','5×12 each',''],['Plate Rotation','4×15 each','']],scale:'Reduce loads'},
      ]},
      {theme:'Krypteia',focus:'Strongman Max — Rite Complete',type:'Strongman',mods:['AMRAP'],blocks:[
        {label:'Strongman AMRAP 28',mod:'AMRAP',fmt:'AMRAP 28 — beat W6 score.',ex:[['Tyre Flip','5 reps',''],['Sledgehammer Slam','12 each side',''],['Farmers Walk','35m','heavy'],['Med Ball Slam','10 reps','']]},
        {label:'Rotational Finisher',mod:'Circuit',ex:[['Landmine Rotation','5×15 each','heaviest yet'],['KB Swing 28kg','5×25',''],['Med Ball Rotational Throw','4×10 each','']],scale:'Lighter loads'},
      ]},
      {theme:'Ares Strike',focus:'Peak Athletic Expression',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'Power Complex EMOM',mod:'EMOM',fmt:'EMOM 15 — 5-way. A→6 DB Snatch each. B→8 Landmine C&P each. C→10 KB Swing 28kg. D→6 Broad Jumps. E→8 Box Jumps. ×3 rounds.',ex:[['DB Snatch','6 each — min A',''],['Landmine Clean & Press','8 each — min B','heavier than W6'],['KB Swing 28kg','10 — min C',''],['Broad Jump','6 — min D','max distance'],['Box Jump','8 — min E','']]},
        {label:'Sprint AMRAP — Beat W6',mod:'AMRAP',fmt:'AMRAP 20 — beat W6 score.',ex:[['Machine Sprint 300m','max pace',''],['Box Jump','10 reps','']]},
        {label:'Core',mod:'Circuit',ex:[['TRX Pendulum','4×15 each',''],['TRX Bodysaw','4×20',''],['Sit-Ups','5×30','']],scale:'Reduce loads'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 8 — Deload + Test', name:'Deload + 300 Test', focus:'Absorb the work. Test. Enter Phase 3 — War.',
    tags:['Deload','300 Test','Phase Close'],
    isDeload:true,
    days:[
      {theme:'300 Test — Opening',focus:'Phase 2 opening benchmark',type:'Test',mods:['Test'],is300:true,note:'You are stronger than Phase 1. The 60kg deadlifts should feel different. Prove it.'},
      {theme:'Deload — Light Compound',focus:'Movement maintenance, flush fatigue',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Light Strength',mod:'Recovery',ex:[['Barbell Squat','3×8','@55%'],['Deadlift','2×6','@55%'],['Push-Up','3×15',''],['Pull-Up','3×8','']]},
        {label:'Light Cardio',mod:'Recovery',ex:[['20min Run','easy',''],['Rowing','1500m easy','']]},
      ]},
      {theme:'Deload — Mobility & Flow',focus:'Recovery focused',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Mobility',mod:'Recovery',ex:[['Turkish Get-Up','3×3 each','very light'],['Bear Crawl','3×20m',''],['Lunges','2×10 each','']]},
        {label:'Light Conditioning',mod:'Recovery',ex:[['Ski Erg','3×300m easy',''],['Rowing','10min easy',''],['Sit-Ups','3×20','']]},
      ]},
      {theme:'Deload — Active',focus:'Feel good movement session',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Active Recovery',mod:'Recovery',ex:[['KB Swing','3×15','light'],['Farmers Walk','3×30m',''],['DB Snatch','2×5 each','light'],['BW Squat','2×20','']]},
        {label:'Cardio',mod:'Recovery',ex:[['25min Run','easy',''],['Rowing','1000m easy','']]},
      ]},
      {theme:'300 Test — Final',focus:'Beat Phase 2 opening time. Enter War.',type:'Test',mods:['Test'],is300:true,note:'Enter Phase 3 stronger. Enter Phase 3 faster. Molon Labe is coming.'},
      {rest:true},{rest:true},
    ]
  },
  ]
},

// ════════════════════════════════════════════════════════════════
// PHASE 3 — WAR
// ════════════════════════════════════════════════════════════════
{
  name:'War', num:'Phase 03', weeks:'Weeks 9–12',
  desc:'Total warfare. Explosive power meets high-intensity conditioning. Sessions are brutal, short rest periods, maximum output required. The Spartan warrior is called to battle.',
  foci:['Explosive Power','EMOM & IWT Intensity','Combat Capability','Mental Toughness'],
  weeks:[
  {
    label:'Week 9', name:'Battle Formation', focus:'Explosive power introduced. New movements. Short rest. Maximum output.',
    tags:['Explosive Power','New Movements','EMOM Density','Battle Formation'],
    days:[
      {theme:'Battle Formation',focus:'Explosive Strength — Plyometric Power',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Power Complex',mod:'Strength',ex:[['Paused Barbell Back Squat','4×3','@88% — 2s pause at bottom'],['Romanian Deadlift','4×6','4s eccentric — hamstring'],['Weighted Step-Up (50cm box)','4×8 each','heavy DBs'],['Barbell Glute Bridge','3×10','3s hold']]},
        {label:'10-Min EMOM — Lower Power',mod:'EMOM',fmt:'Odd min → 4 Broad Jumps. Even min → 6 Trap Bar Jump Deadlifts (moderate load). 10 rounds.',ex:[['Broad Jump','4 reps — odd mins','max horizontal distance'],['Trap Bar Jump Deadlift','6 reps — even mins','explosive — mod load']]},
        {label:'Finisher',mod:'Circuit',ex:[['Single-Leg KB RDL','3×8 each',''],['Nordic Hamstring Curl','3×6','5s eccentric'],['Dead Bug','3×10 each','anti-extension']],scale:'Reduce loads · standard RDL · bird dog'},
      ]},
      {theme:'The Ambush',focus:'High-Intensity IWT Warfare',type:'Conditioning',mods:['IWT'],blocks:[
        {label:'IWT Block — 5 Rounds',mod:'IWT',fmt:'5 rounds: 400m machine sprint → immediately: 10 KB Goblet Squats + 8 Box Jumps + 6 Pull-Ups. Rest 2min.',ex:[['Machine Sprint 400m','max pace','transition immediately'],['KB Goblet Squat','10 reps',''],['Box Jump','8 reps','full extension'],['Pull-Up','6 reps','']]},
        {label:'Combat Finisher',mod:'Circuit',ex:[['Tyre Flip','5×8','sprint 10m after each'],['Sledgehammer Slam','5×25',''],['Med Ball Slam','5×15','']],scale:'300m · lighter loads'},
      ]},
      {theme:'Spartan Strike',focus:'Upper Body Explosive Power',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Max Upper Strength',mod:'Strength',ex:[['Close-Grip Bench Press','4×4','@87% — tricep + inner chest'],['Weighted Chin-Up (supinated)','5×4','+18kg'],['Seated Arnold Press','4×8','full rotation'],['Incline DB Press','4×8','@75%']]},
        {label:'8-Min EMOM — Explosive Upper',mod:'EMOM',fmt:'Odd min → 5 Clapping Push-Ups. Even min → 4 Barbell Push Press @80%. 8 rounds.',ex:[['Clapping Push-Up','5 reps — odd mins','max explosiveness'],['Barbell Push Press','4 reps — even mins','@80% violent drive']]},
        {label:'Rotation & Core',mod:'Circuit',ex:[['Half-Kneeling Landmine Press','4×8 each','anti-rotation + press'],['TRX Power Pull','4×10 each',''],['TRX Fallout','3×12','advanced anti-extension'],['Pallof Press (band)','3×12 each','2s hold']],scale:'Reduce all loads'},
      ]},
      {theme:'Lakedaimon',focus:'Strongman + HIIT Fusion — You Are Sparta',type:'Strongman',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 20 — Lakedaimon Standard',mod:'AMRAP',fmt:'Max rounds in 20 minutes. Record score.',ex:[['Tyre Flip + Sprint 10m','6 flips','sprint after every flip'],['Sledgehammer Slam','12 each side','alternate'],['Farmers Walk','20m','heavy'],['Sandbag Clean & Press','5 reps',''],['Battle Ropes','20s waves','']]},
        {label:'Post-AMRAP',mod:'Circuit',ex:[['KB Swing 28kg','5×25',''],['Bear Crawl','4×30m',''],['Med Ball Slam','4×15','']],scale:'4 flips · 8 slams · 15s ropes'},
      ]},
      {theme:'Agoge III',focus:'Warrior Conditioning — Total Athletic Output',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'6-Way Rotational EMOM',mod:'EMOM',fmt:'EMOM 12 — 6 exercises, 1 per minute, 8 reps each. Cycle twice.',ex:[['Landmine Rotational Clean','8 each — min 1 & 7','hip-driven'],['Med Ball Rotational Wall Throw','8 each — min 2 & 8','max velocity'],['Landmine Rotation','8 each — min 3 & 9','full rotation'],['DB Snatch','8 each — min 4 & 10','explosive'],['KB Windmill','6 each — min 5 & 11','shoulder stability'],['Band Pallof Press + Rotation','8 each — min 6 & 12','anti-rotate then rotate']]},
        {label:'Athletic AMRAP 15',mod:'AMRAP',fmt:'AMRAP 15 — beat Phase 2 Agoge score.',ex:[['Sprint 40m','×1','max pace'],['Burpee Broad Jump','5 reps',''],['Ski Erg 150m','hard pace',''],['TRX Atomic Push-Up','8 reps',''],['Lateral Bound','10 reps','alternating']],scale:'Reduce loads · remove jumps'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 10', name:'All-Out Warfare', focus:'Volume and intensity peak simultaneously. AMRAP benchmarks must beat Phase 2.',
    tags:['IWT Peak','AMRAP Beat All','@88% Strength','Maximum Output'],
    days:[
      {theme:'Battle Formation',focus:'Power — Intensity Up',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Heavy Power',mod:'Strength',ex:[['Barbell Back Squat','5×4','@88%'],['Barbell Deadlift','4×4','@88%'],['Box Jump + Barbell Squat superset','5×5+5','no rest between'],['Plyo Push-Up','5×10','']]},
        {label:'EMOM Lower Power',mod:'EMOM',fmt:'EMOM 10 — odd → 4 Broad Jumps. Even → 5 Trap Bar Jump Deadlifts. 10 rounds.',ex:[['Broad Jump','4 reps — odd','max distance'],['Trap Bar Jump Deadlift','5 reps — even','explosive']]},
        {label:'Accessory',mod:'Circuit',ex:[['Bulgarian Split Squat','4×10 each','heavy'],['Farmers Walk','5×60m',''],['Nordic Hamstring Curl','3×6','']],scale:'Reduce loads'},
      ]},
      {theme:'The Ambush',focus:'Combat Conditioning — Volume Up',type:'Conditioning',mods:['IWT','AMRAP'],blocks:[
        {label:'IWT — 6 Rounds',mod:'IWT',fmt:'6 rounds: 300m Ski Erg → 10 DB Hang Power Cleans → 8 Box Jumps. Rest 60s.',ex:[['Ski Erg 300m','max sprint','transition immediately'],['DB Hang Power Clean','10 reps','explosive hip drive'],['Box Jump','8 reps','full extension']]},
        {label:'AMRAP Finisher',mod:'AMRAP',fmt:'AMRAP 12.',ex:[['Tyre Flip','5 reps',''],['Sledgehammer','10 each',''],['Battle Ropes','20s',''],['Bear Crawl','20m','']],scale:'200m · lighter loads'},
      ]},
      {theme:'Spartan Strike',focus:'Upper Power — Max Effort',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Max Upper',mod:'Strength',ex:[['Bench Press','5×4','@88%'],['Push Press','5×4','heavy'],['Weighted Dips','5×AMRAP',''],['Plyo Push-Up','5×12','']]},
        {label:'EMOM Upper Explosive',mod:'EMOM',fmt:'EMOM 10 — odd → 5 Clap Push-Ups. Even → 4 Push Press @80%. 10 rounds.',ex:[['Clapping Push-Up','5 reps — odd',''],['Push Press @80%','4 reps — even','violent drive']]},
        {label:'Pull + Rotation',mod:'Circuit',ex:[['Weighted Pull-Up','5×5','+17kg'],['TRX Power Pull','5×12 each',''],['Landmine Clean & Press','5×10 each',''],['Plate Rotation','4×15 each','']],scale:'Reduce loads'},
      ]},
      {theme:'Lakedaimon',focus:'Strongman — The Land of Warriors',type:'Strongman',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 25 — Beat W9',mod:'AMRAP',fmt:'AMRAP 25 — beat Week 9 score.',ex:[['Tyre Flip + Sprint 10m','6 reps',''],['Sledgehammer','12 each side',''],['Farmers Walk','25m','heavier than W9'],['Sandbag Clean & Press','5 reps',''],['Battle Ropes','25s waves','']]},
        {label:'Conditioning',mod:'Circuit',ex:[['KB Swing 28kg','5×30',''],['Sprints 50m','×10','45s rest'],['Med Ball Slam','5×20','']],scale:'4 flips · 8 slams · 20s ropes'},
      ]},
      {theme:'Agoge III',focus:'Peak Athletic Power — Phase 3',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'Power EMOM — 4-Way',mod:'EMOM',fmt:'EMOM 12 — 4-way. A→8 DB Snatch each. B→10 Landmine C&P each. C→10 KB Swing 28kg. D→8 Box Jumps. ×3 rounds.',ex:[['DB Snatch','8 each — min A','heavier'],['Landmine Clean & Press','10 each — min B',''],['KB Swing 28kg','10 — min C',''],['Box Jump','8 — min D','']]},
        {label:'Athletic AMRAP — Beat W9',mod:'AMRAP',fmt:'AMRAP 18 — beat Week 9 score.',ex:[['Sprint 40m','×1',''],['Burpee Broad Jump','5 reps',''],['Ski Erg 200m',''],['TRX Atomic Push-Up','8 reps','']]},
        {label:'Core',mod:'Circuit',ex:[['TRX Pendulum','5×15 each',''],['TRX Bodysaw','4×20',''],['Sit-Ups','5×40',''],['Rollout / TRX Fallout','3×12','']],scale:'Reduce all loads'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 11', name:'Thermopylae — Battle Peak', focus:'Near-max strength. Peak AMRAP. The hardest week of Phase 3.',
    tags:['@90% Strength','AMRAP Peak','20-Min Strongman','Rotational Peak'],
    days:[
      {theme:'Thermopylae',focus:'Max Strength + EMOM Power Complex',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Near-Max Strength',mod:'Strength',ex:[['Paused Barbell Back Squat','4×3','@90% — 2s pause'],['Romanian Deadlift','4×6','4s eccentric'],['Weighted Step-Up','4×8 each','heavy DBs'],['Barbell Glute Bridge','3×10','3s hold']]},
        {label:'10-Min EMOM Lower Power',mod:'EMOM',fmt:'Odd → 4 Broad Jumps. Even → 6 Trap Bar Jump Deadlifts. 10 rounds.',ex:[['Broad Jump','4 reps — odd mins','max distance'],['Trap Bar Jump Deadlift','6 reps — even mins','explosive']]},
        {label:'Finisher',mod:'Circuit',ex:[['Single-Leg KB RDL','3×8 each',''],['Reverse Sled Drag / Tyre Drag','3×20m',''],['Dead Bug','3×10 each','']],scale:'Reduce loads · bird dog not dead bug'},
      ]},
      {theme:'The Ambush',focus:'IWT — Peak Power Endurance',type:'Conditioning',mods:['IWT','AMRAP'],blocks:[
        {label:'IWT — 5 Max Rounds',mod:'IWT',fmt:'5 rounds: 400m machine → 12 KB Goblet Squats → 10 Push Press → 8 Pull-Ups. Rest 90s.',ex:[['Machine Sprint 400m','max pace','transition immediately'],['KB Goblet Squat','12 reps',''],['Push Press','10 reps','moderate load'],['Pull-Up','8 reps','']]},
        {label:'Combat Assault AMRAP',mod:'AMRAP',fmt:'AMRAP 15 after IWT — beat W10.',ex:[['Assault Bike / Ski Erg','30s all-out',''],['Tyre Flip','5 reps',''],['Battle Ropes','20s',''],['Bear Crawl','20m','']],scale:'300m · lighter loads'},
      ]},
      {theme:'Spartan Strike',focus:'Upper Max Strength + EMOM Pressing Power',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Max Upper Strength',mod:'Strength',ex:[['Close-Grip Bench Press','4×4','@90%'],['Weighted Chin-Up','5×4','+20kg'],['Seated Arnold Press','4×8',''],['Incline DB Press','4×8','@78%']]},
        {label:'8-Min EMOM Explosive',mod:'EMOM',fmt:'Odd → 5 Clap Push-Ups. Even → 4 Push Press @82%. 8 rounds.',ex:[['Clapping Push-Up','5 reps — odd','max explosiveness'],['Push Press @82%','4 reps — even','']]},
        {label:'Rotation Peak',mod:'Circuit',ex:[['Half-Kneeling Landmine Press','4×8 each',''],['Landmine Clean & Press','4×10 each','heaviest yet'],['Band Pallof Press','3×12 each','heavy band'],['TRX Fallout','3×12','']],scale:'Reduce loads'},
      ]},
      {theme:'Lakedaimon',focus:'Strongman AMRAP — Maximum Warrior Output',type:'Strongman',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 20 — Max Effort',mod:'AMRAP',fmt:'AMRAP 20 — this is the peak strongman session of Phase 3.',ex:[['Tyre Flip + Sprint 10m','6 flips','sprint after every flip'],['Sledgehammer Slam','15 each side',''],['Yoke / Barbell Carry','20m',''],['Sandbag Over Shoulder','6 reps',''],['Battle Ropes Waves','25s','']]},
        {label:'Post-AMRAP Assault',mod:'Circuit',ex:[['Farmers Walk','3×50m','heaviest'],['KB Swing 32kg','5×20',''],['Sprint 50m','×6','45s rest']],scale:'4 flips · 10 slams · 20s ropes'},
      ]},
      {theme:'Agoge III — Peak Rotational',focus:'Rotational EMOM + Athletic AMRAP — Peak Phase 3',type:'Conditioning',mods:['EMOM','AMRAP'],blocks:[
        {label:'12-Min 6-Way Rotational EMOM',mod:'EMOM',fmt:'EMOM 12 — 6-way. 8 reps each. Cycle twice. Every minute a different movement.',ex:[['Landmine Rotational Clean','8 each — min 1 & 7',''],['Med Ball Rotational Throw','8 each — min 2 & 8','max velocity'],['Landmine Rotation','8 each — min 3 & 9','heavy'],['DB Snatch','8 each — min 4 & 10',''],['KB Windmill','6 each — min 5 & 11',''],['Band Pallof Press + Rotation','8 each — min 6 & 12','']]},
        {label:'Athletic AMRAP 15 — Beat W10',mod:'AMRAP',fmt:'AMRAP 15 — beat Week 10 score.',ex:[['Sprint 40m','×1',''],['Burpee Broad Jump','5 reps',''],['Ski Erg 150m',''],['TRX Atomic Push-Up','8 reps',''],['Lateral Bound','10 reps','']]},
        {label:'Core Destruction',mod:'Circuit',ex:[['TRX Pendulum','5×20 each',''],['Turkish Get-Up','4×5 each',''],['Sit-Ups','5×40',''],['Ab Wheel Rollout','3×12','']],scale:'Reduce loads'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 12 — Deload + Test', name:'Deload + 300 Test', focus:'Absorb the work. Test. Enter Legacy.',
    tags:['Deload','300 Test','Phase Close'],
    isDeload:true,
    days:[
      {theme:'300 Test — Opening',focus:'Phase 3 benchmark — smash Phase 2 time',type:'Test',mods:['Test'],is300:true,note:'Your deadlift is heavier. Your pull-ups are stronger. The test time should prove it.'},
      {theme:'Deload',focus:'Active recovery — flush and stay loose',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Light Work',mod:'Recovery',ex:[['Barbell Squat','3×8','@50%'],['Push-Up','3×15',''],['Pull-Up','3×8',''],['BW Squat','2×20','']]},
        {label:'Cardio',mod:'Recovery',ex:[['20min easy Run','',''],['Rowing','1500m easy','']]},
      ]},
      {theme:'Deload — Mobility',focus:'Deep recovery',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Mobility Focus',mod:'Recovery',ex:[['Turkish Get-Up','3×3 each','light'],['Bear Crawl','3×20m',''],['Lunges','2×10 each',''],['Farmers Walk','3×30m','light']]},
        {label:'Light Cardio',mod:'Recovery',ex:[['Ski Erg','3×300m easy',''],['Sit-Ups','3×20','']]},
      ]},
      {theme:'Deload — Athletic',focus:'Skill maintenance',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Skill Work',mod:'Recovery',ex:[['DB Snatch','2×5 each','light'],['KB Swing','3×15','light'],['Landmine Clean & Press','2×5 each','light'],['Rowing','2000m easy','']]},
        {label:'Light Conditioning',mod:'Recovery',ex:[['25min Run','easy pace',''],['TRX Bodysaw','2×10','']]},
      ]},
      {theme:'300 Test — Final',focus:'Destroy Phase 3 time. Prepare for Legacy.',type:'Test',mods:['Test'],is300:true,note:'Four weeks of Legacy remain. You have never been this strong. Leave everything.'},
      {rest:true},{rest:true},
    ]
  },
  ]
},

// ════════════════════════════════════════════════════════════════
// PHASE 4 — LEGACY
// ════════════════════════════════════════════════════════════════
{
  name:'Legacy', num:'Phase 04', weeks:'Weeks 13–16',
  desc:'Leave your mark. Peak-week intensity, maximum loads, warrior-level conditioning. By now you are forged. These four weeks cement your transformation into permanent physical legacy.',
  foci:['Peak Strength','Elite Conditioning','Maximum Power','Warrior Physique'],
  weeks:[
  {
    label:'Week 13', name:'Legacy I — Spartan Throne', focus:'New movements, peak load introduction. AMRAP 35 begins.',
    tags:['@90-92%','New Movements','AMRAP 35','Legacy Begins'],
    days:[
      {theme:'Spartan Throne',focus:'Near-Max Strength + Density EMOM',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Near-Max Compound',mod:'Strength',ex:[['Safety Bar / Box Squat','4×3','@90% — fresh stimulus'],['Barbell Deadlift','3×2','@92% — near-max'],['Single-Leg Press','4×8 each','unilateral development'],['Nordic Hamstring Curl','4×6','eccentric strength']]},
        {label:'12-Min Density EMOM',mod:'EMOM',fmt:'Every minute: 3 Heavy KB Swings (32kg) + 3 Broad Jumps. 12 rounds. Maintain quality.',ex:[['KB Swing 32kg','3 reps per min','hip power'],['Broad Jump','3 reps per min','max distance']]},
        {label:'Accessory',mod:'Circuit',ex:[['Copenhagen Adductor Hold','3×20s each','hip stability'],['Reverse Hyper / Back Extension','4×12','posterior chain'],['Landmine Squat','3×10','rotational loading']],scale:'Reduce loads · lighter KB'},
      ]},
      {theme:'Blood & Thunder',focus:'IWT — Power Endurance — Peak Aerobic',type:'Conditioning',mods:['IWT','Circuit'],blocks:[
        {label:'IWT — 5 Rounds',mod:'IWT',fmt:'5 rounds — all 4 stations back to back = 1 round. Rest 2min.',ex:[['Ski Erg 400m','max pace','transition immediately'],['DB Thruster','10 reps','squat to press'],['Rope Climb / TRX Inverted Row ×15','1 ascent','full pull'],['Sprint 60m','×1','all out']]},
        {label:'Aerobic Finisher',mod:'Circuit',ex:[['Rowing 2km','threshold pace',''],['Run 1km','max effort','']],scale:'300m Ski · lighter thruster'},
      ]},
      {theme:'Spartan Hammer',focus:'Upper Strength — New Movements + EMOM',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Max Upper — New Movements',mod:'Strength',ex:[['Floor Press — Barbell','4×4','@88% — eliminates leg drive'],['Weighted Pull-Up (neutral grip)','5×4','+22kg'],['Z-Press (seated floor overhead)','4×5','pure overhead — no leg drive'],['Single-Arm DB Bench Press','4×8 each','anti-rotation']]},
        {label:'10-Min EMOM Explosive Upper',mod:'EMOM',fmt:'Odd → 6 Med Ball Chest Pass into wall. Even → 4 Push Press @82%. 10 rounds.',ex:[['Med Ball Chest Pass','6 reps — odd','max power expression'],['Barbell Push Press @82%','4 reps — even','violent drive']]},
        {label:'Shoulder & Core',mod:'Circuit',ex:[['Cuban Press','3×12','rotator cuff strength'],['Tall Kneeling Landmine Press','4×10 each','rotational stability'],['Hollow Body Hold','4×30s','core compression']],scale:'Reduce loads'},
      ]},
      {theme:'Molon Labe',focus:'Come and Take Them — Strongman AMRAP 25',type:'Strongman',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 25 — Molon Labe Standard',mod:'AMRAP',fmt:'25 minutes. Max rounds. Log total. This is the hardest strongman session of the plan.',ex:[['Tyre Flip + Sprint 10m','6 flips','sprint after every flip'],['Sledgehammer Slam','12 each side','alternate'],['Yoke / Heavy Barbell Carry','20m','warrior carry'],['Sandbag Over Shoulder','6 reps','alternate shoulders'],['Battle Ropes','20s waves','max effort']]},
        {label:'Finisher',mod:'Circuit',ex:[['Farmers Walk','3×50m','heaviest possible'],['KB Swing 32kg','3×25',''],['Sprint 40m','×6','30s rest']],scale:'4 flips · 8 slams · 15s ropes'},
      ]},
      {theme:'Legacy Run — AMRAP 35',focus:'Peak Athletic AMRAP + Rotational Chipper',type:'Conditioning',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 35 — Legacy Complex',mod:'AMRAP',fmt:'Max rounds in 35 minutes. Record score. AMRAP grows 5min each week. Beat your score every week.',ex:[['DB Snatch','6 each arm',''],['Landmine Clean & Press','6 each','heavy'],['KB Swing 32kg','15 reps',''],['Box Jump to Step-Down','8 reps','controlled landing'],['TRX Pike Push-Up','8 reps',''],['Sprint 30m','×1','max pace']]},
        {label:'Rotational Chipper',mod:'Circuit',fmt:'Complete all reps in order. For time.',ex:[['Med Ball Rotational Wall Throw','30 each side','60 total reps'],['Landmine Rotation','20 each','heavy'],['Unsupported Plate Rotation','15 each','slow'],['TRX Pendulum','20 each','']],scale:'Reduce all loads'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 14', name:'Legacy II — Volume Peak', focus:'Beat every AMRAP score. Volume peak. Spartan Chipper introduced.',
    tags:['Volume Peak','Beat All AMRAPs','AMRAP 40','Spartan Chipper'],
    days:[
      {theme:'Spartan Throne',focus:'Volume Strength + Cluster Sets',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Volume Compound',mod:'Strength',ex:[['Barbell Back Squat','5×5','@85% — volume over intensity today'],['Trap Bar Deadlift','4×5','@85% — different pattern'],['Bulgarian Split Squat','4×12 each','heavy DBs'],['GHD Sit-Up / V-Up','4×15','']]},
        {label:'15-Min Density EMOM',mod:'EMOM',fmt:'Every 90s: 5 KB Swings (32kg) + 4 Broad Jumps + 3 Burpee Box Jumps. 10 rounds.',ex:[['KB Swing 32kg','5 reps',''],['Broad Jump','4 reps','max distance'],['Burpee Box Jump','3 reps','explosive']]},
        {label:'Accessory',mod:'Circuit',ex:[['Hack Squat / Hatfield Squat','3×10','quad dominance'],['Single-Leg Hip Thrust','4×10 each',''],['Side Plank + Hip Abduction','3×12 each','hip stability']],scale:'Reduce loads'},
      ]},
      {theme:'Blood & Thunder',focus:'Peak Cardiovascular — IWT 6 Rounds',type:'Conditioning',mods:['IWT','Circuit'],blocks:[
        {label:'IWT — 6 Rounds',mod:'IWT',fmt:'6 rounds. All 4 stations = 1 round. Rest 90s. Pace must not drop rounds 5–6.',ex:[['Assault Bike / Ski Erg','60s all-out','max output'],['Barbell Hang Power Clean','8 reps','explosive'],['Box Jump','8 reps','step down controlled'],['Ring / TRX Push-Up','10 reps','unstable surface']]},
        {label:'Distance Block',mod:'Circuit',ex:[['5km Run','max effort threshold',''],['Rowing 1000m','immediately after','hold hard pace']],scale:'Lighter loads · shorten run · 3 rounds if needed'},
      ]},
      {theme:'Spartan Hammer',focus:'Volume Upper + Pressing Circuit',type:'Power',mods:['Strength','Circuit'],blocks:[
        {label:'Volume Press',mod:'Strength',ex:[['Bench Press','5×5','@85%'],['Weighted Dips','+20kg 5×AMRAP','volume reps'],['Seated Cable Row / DB Row','4×12','rhomboid + mid-trap'],['Weighted Pull-Up','4×6','+20kg']]},
        {label:'Pressing Circuit — 4 Rounds',mod:'Circuit',fmt:'All 5 exercises back to back. Rest 90s between rounds.',ex:[['Barbell Push Press','6 reps','explosive'],['DB Lateral Raise','12 reps','strict — no swing'],['Plyo Push-Up','8 reps','hands leave floor'],['TRX Power Pull','10 each','rotational pull'],['Med Ball Chest Throw','8 reps','into wall — max velocity']]},
        {label:'Core & Stability',mod:'Circuit',ex:[['L-Sit Hold','4×15s','compression strength'],['Serratus Push-Up','3×15','scapular stability'],['TRX Bodysaw','4×15','']],scale:'Reduce loads'},
      ]},
      {theme:'Molon Labe',focus:'Spartan Chipper — For Time',type:'Strongman',mods:['Circuit'],blocks:[
        {label:'Spartan Chipper — For Time',mod:'Circuit',fmt:'Complete all reps in order. No prescribed rest. Record total time.',ex:[['Tyre Flip','30 reps total',''],['Sledgehammer Slam','25 each side','alternate'],['Farmers Walk','5×60m','no set-down within set'],['KB Swing 32kg','50 reps',''],['Sandbag Over Shoulder','20 reps','alt shoulders'],['Battle Ropes Waves','4×30s','15s rest only']]},
      ]},
      {theme:'Legacy Run — AMRAP 40',focus:'Beat Week 13 Score + Rotational Chipper',type:'Conditioning',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 40 — Beat Week 13',mod:'AMRAP',fmt:'Same complex as Week 13. 5 more minutes. Score must beat W13.',ex:[['DB Snatch','6 each arm',''],['Landmine Clean & Press','6 each','heavier than W13'],['KB Swing 32kg','15 reps',''],['Box Jump to Step-Down','8 reps',''],['Ring / TRX Push-Up','8 reps',''],['Sprint 30m','×1','']]},
        {label:'Rotational Chipper — For Time',mod:'Circuit',ex:[['Med Ball Rotational Throw','35 each side','more than W13'],['Landmine Rotation','20 each','heavier than W13'],['Ab Wheel Rollout','15 reps','anti-extension'],['TRX Pendulum','25 each','']],scale:'Reduce loads throughout'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 15', name:'Legacy III — Peak Power', focus:'@95% maximal strength. AMRAP 45. 100 tyre flips. The warrior at his pinnacle.',
    tags:['@95% Max','AMRAP 45','100 Tyre Flips','Warrior Pinnacle'],
    days:[
      {theme:'Spartan Throne',focus:'True Max Strength @95% + Power EMOM',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Maximal Strength',mod:'Strength',ex:[['Barbell Back Squat','3×2','@95% — record attempt'],['Barbell Deadlift','3×2','@95% — record attempt'],['Trap Bar Deadlift','2×3','@90% — secondary max'],['Weighted Pull-Up','4×4','+25kg — peak weighted pull']]},
        {label:'15-Min 3-Way Power EMOM',mod:'EMOM',fmt:'3-way rotating: Min A → 4 Broad Jumps. Min B → 4 Trap Bar Jump Deadlifts (mod load). Min C → 6 KB Swings 32kg. Cycle A-B-C ×5 = 15 rounds.',ex:[['Broad Jump','4 reps — min A','max distance'],['Trap Bar Jump Deadlift','4 reps — min B','explosive'],['KB Swing 32kg','6 reps — min C','violent hip snap']]},
        {label:'Posterior Chain Finisher',mod:'Circuit',ex:[['Nordic Hamstring Curl','3×5','5s eccentric'],['Reverse Hyper / Back Extension','4×15','spinal decompression'],['Landmine Squat to Press','3×10','full body integration']],scale:'Reduce loads · lighter KB'},
      ]},
      {theme:'Blood & Thunder — Final',focus:'Peak Conditioning — All Machines + Long Run',type:'Conditioning',mods:['IWT','Circuit'],blocks:[
        {label:'IWT — 5 Max Rounds',mod:'IWT',fmt:'Maximum effort every round. 2min full rest. ×5 rounds.',ex:[['Ski Erg 500m','max effort — sub 2min target','transition immediately'],['DB Thruster','12 reps','moderate-heavy'],['Rope Climb / TRX Row ×15','1 ascent','max pull'],['Sprint 80m','×1','all out']]},
        {label:'Endurance Block',mod:'Circuit',ex:[['10km Run','max effort threshold','the warrior runs'],['Rowing 2km','immediately after','hold every stroke'],['Ski Erg 1km','empty the tank','finish line']],scale:'5km run · 1km row · shorten ski'},
      ]},
      {theme:'Spartan Hammer — Peak Upper',focus:'True Max Upper + 4-Way EMOM + Rotational Power',type:'Power',mods:['Strength','EMOM'],blocks:[
        {label:'Peak Upper Strength',mod:'Strength',ex:[['Bench Press','3×2','@95%'],['Push Press','3×3','near max — explosive'],['Weighted Dips','+25kg 4×AMRAP','heavy'],['Weighted Chin-Up','4×4','+22kg supinated']]},
        {label:'12-Min 4-Way EMOM',mod:'EMOM',fmt:'4-way rotating: A→5 Clap Push-Ups. B→4 Push Press @80%. C→6 Med Ball Chest Pass. D→5 Heavy DB Snatch each. ×3 rounds.',ex:[['Clapping Push-Up','5 reps — min A','max explosiveness'],['Push Press @80%','4 reps — min B','violent drive'],['Med Ball Chest Pass','6 reps — min C','max velocity'],['Heavy DB Snatch','5 each — min D','power from floor']]},
        {label:'Rotational Strength Complex',mod:'Circuit',ex:[['Landmine Clean & Press','5×12 each','peak load'],['Landmine Rotation','5×20 each','full rotation loaded'],['Med Ball Rotational Slam','4×12 each','rotational + slam'],['Ab Wheel Rollout','3×12','anti-extension peak']],scale:'Reduce loads'},
      ]},
      {theme:'Molon Labe — 100 Flips',focus:'100 Tyre Flips For Time + Full Strongman Complex',type:'Strongman',mods:['Circuit'],blocks:[
        {label:'100 Tyre Flips — For Time',mod:'Circuit',fmt:'100 total flips. No prescribed rest. Record your time.',ex:[['Tyre Flip','100 reps total','for time — record it']]},
        {label:'Post-Flips Strongman',mod:'Circuit',ex:[['Sledgehammer Slam','5×40 each side',''],['Farmers Walk','5×80m','heaviest load'],['Yoke / Barbell Carry','5×20m','warrior carry'],['KB Swing 32kg','5×30',''],['Sprint 50m','×10','45s rest']],scale:'60 flips · reduce all post-flip loads'},
      ]},
      {theme:'Legacy Run — AMRAP 45',focus:'Peak AMRAP + Full Rotational Chipper — For Time',type:'Conditioning',mods:['AMRAP','Circuit'],blocks:[
        {label:'AMRAP 45 — Beat Week 14',mod:'AMRAP',fmt:'45 minutes. Max rounds. This is your peak AMRAP score.',ex:[['DB Snatch','8 each arm','heaviest to date'],['Landmine Clean & Press','8 each','max load'],['KB Swing 32kg','20 reps',''],['Box Jump','8 reps',''],['Ring / TRX Push-Up','10 reps',''],['Sprint 40m','×1','all out']]},
        {label:'Full Rotational Chipper — For Time',mod:'Circuit',ex:[['Med Ball Rotational Slam','20 each side',''],['Landmine Rotation','25 each','heavy'],['Half-Kneeling Cable Chop / Band Chop','20 each',''],['DB Woodchop — Standing Diagonal','20 each',''],['Ab Wheel Rollout','15 reps',''],['TRX Pendulum','30 each',''],['Band Pallof Press','15 each','heavy']],scale:'Reduce all loads throughout'},
      ]},
      {rest:true},{rest:true},
    ]
  },
  {
    label:'Week 16 — Molon Labe', name:'Molon Labe — The Final Test', focus:'Sharpen. Rest. Visualise. Leave everything on the floor.',
    tags:['Final 300','Taper','Molon Labe','Come and Take Them'],
    isDeload:true,
    days:[
      {theme:'300 Test — Legacy Opening',focus:'Phase 4 opening benchmark — your final baseline before the last test',type:'Test',mods:['Test'],is300:true,note:'Every phase opened with this test. This is the last opening. Record it. You will beat it on Saturday.'},
      {theme:'Sharpen the Blade',focus:'Light work — feel sharp, stay loose',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Taper Work',mod:'Recovery',ex:[['Goblet Squat','3×6','@50% — movement quality'],['Push-Up','3×10','slow tempo'],['Pull-Up','3×6','controlled'],['Broad Jump','3×4','sub-max'],['20min Run','easy Zone 2','']]},
      ]},
      {theme:'Rest & Visualise',focus:'Eat well. Sleep 8+ hours. Run the 300 in your mind.',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Today You Rest',mod:'Recovery',ex:[['Walk 20–30min','easy','sunlight if possible'],['Visualisation — 15min','eyes closed','run the 300 in your mind'],['Nutrition focus','carbohydrate loading','fuel the warrior'],['Sleep 8+ hours','non-negotiable','recovery is training']]},
      ]},
      {theme:'Rest — Pre-Test',focus:'Eat. Sleep. Prepare. Tomorrow you leave your Legacy.',type:'Recovery',mods:['Recovery'],blocks:[
        {label:'Final Rest Day',mod:'Recovery',ex:[['Walk 20min','light only',''],['Eat well — high carb','fuel up',''],['Sleep 9+ hours if possible','','Μολὼν λαβέ']]},
      ]},
      {theme:'MOLON LABE — The Final 300',focus:'⚔ Come and take them. Leave everything. This is your Legacy.',type:'Test',mods:['Test'],is300:true,isFinal:true,
       note:'Μολὼν λαβέ — Come and take them. This is what 16 weeks of the Forge, Armour, War and Legacy built. Leave everything. This is your time.'},
      {rest:true},{rest:true},
    ]
  },
  ]
},
];


// ── CONFIG ──────────────────────────────────────────────────────────────────
const SB_URL  = 'https://asrfakeqxppctitgfbrp.supabase.co';
const SB_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcmZha2VxeHBwY3RpdGdmYnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTEwODIsImV4cCI6MjA5NzM4NzA4Mn0.P3g4huiax-k0__D_Z6XWehccAY-FvwgU1WgIP9vmU0U';

// URLs — update these to your live GHL pages
const BASE = 'https://spartan16.mikefosterfitness.co.uk';
const URLS = {
  checkin:   BASE + '/weekly-checkin',
  nutrition: BASE + '/diet',
  booking_ip:BASE + '/book-session',
  booking_on:BASE + '/book-consultation',
  report4w:  BASE + '/report-4week',
  report16w: BASE + '/report-16week',
  app:       BASE + '/app-5415',
};

// Coach credentials — Mike only
const COACH_EMAIL = 'mike@mikefosterfitness.co.uk';
const COACH_PASS  = 'Imogen2016'; // ⚠️ CHANGE BEFORE GOING LIVE

let currentUser = null;
let currentRole = null;
let allClients  = [];
let allCheckins = [];

// ── SIMPLE AUTH ─────────────────────────────────────────────────────────────
// Using localStorage-based auth with Supabase user lookup
// (Swap for Supabase Auth when ready for production)
async function signIn() {
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const pass  = document.getElementById('auth-pass').value;
  const errEl = document.getElementById('auth-err');
  errEl.textContent = '';

  if (!email || !pass) { errEl.textContent = 'Enter your email and password'; return; }

  // Check coach login — hash Mike's password the same way
  if (email === COACH_EMAIL) {
    const encoder  = new TextEncoder();
    const data     = encoder.encode(pass + email + 'spartan16salt');
    const hashBuf  = await crypto.subtle.digest('SHA-256', data);
    const hashArr  = Array.from(new Uint8Array(hashBuf));
    const hashHex  = hashArr.map(b => b.toString(16).padStart(2,'0')).join('');
    const coachBuf = await crypto.subtle.digest('SHA-256', encoder.encode(COACH_PASS + email + 'spartan16salt'));
    const coachHex = Array.from(new Uint8Array(coachBuf)).map(b=>b.toString(16).padStart(2,'0')).join('');
    if (hashHex !== coachHex) { errEl.textContent = 'Incorrect password.'; return; }
    currentUser = { email, role: 'coach', first_name: 'Mike', last_name: 'Foster' };
    currentRole = 'coach';
    saveSession();
    initApp();
    return;
  }

  // Look up client in platform_users
  try {
    let res = await sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=*`);

    // Check waitlist if not found in platform_users
    if (!res.length) {
      const wl = await sbGet(`waitlist_entries?email=eq.${encodeURIComponent(email)}&select=*`);
      if (wl.length) {
        currentUser = { ...wl[0], role: 'waitlist' };
        currentRole = 'waitlist';
        saveSession();
        initApp();
        return;
      }
      errEl.innerHTML = 'No account found. <a href="/register" style="color:var(--gold);text-decoration:underline">Register here</a> or contact Mike.';
      return;
    }
    const user = res[0];

    // Verify password hash
    if (user.password_hash) {
      const encoder = new TextEncoder();
      const data    = encoder.encode(pass + email + 'spartan16salt');
      const hashBuf = await crypto.subtle.digest('SHA-256', data);
      const hashArr = Array.from(new Uint8Array(hashBuf));
      const hashHex = hashArr.map(b => b.toString(16).padStart(2,'0')).join('');
      if (hashHex !== user.password_hash) {
        errEl.textContent = 'Incorrect password.';
        return;
      }
    } else {
      // No password set yet — they need to use their invite link
      errEl.textContent = 'Account not activated yet. Check your invite email from Mike.';
      return;
    }

    currentUser = user;
    currentRole = user.role || 'client';
    saveSession();

    // Update last login
    await sbPatch(`platform_users?email=eq.${encodeURIComponent(email)}`, { last_login: new Date().toISOString() });

    initApp();
  } catch(e) {
    errEl.textContent = 'Something went wrong. Try again.';
  }
}

function saveSession() {
  localStorage.setItem('s16_user', JSON.stringify(currentUser));
  localStorage.setItem('s16_role', currentRole);
}

function loadSession() {
  const u = localStorage.getItem('s16_user');
  const r = localStorage.getItem('s16_role');
  if (u && r) { currentUser = JSON.parse(u); currentRole = r; return true; }
  return false;
}

function signOut() {
  localStorage.removeItem('s16_user');
  localStorage.removeItem('s16_role');
  currentUser = null; currentRole = null;
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-shell').classList.add('hidden');
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-pass').value = '';
}

document.getElementById('auth-pass').addEventListener('keydown', e => {
  if (e.key === 'Enter') signIn();
});

// ── SUPABASE HELPERS ────────────────────────────────────────────────────────
async function sbGet(path) {
  const res = await fetch(`${SB_URL}/rest/v1/${path}`, {
    headers:{ 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
  });
  return res.ok ? res.json() : [];
}

async function sbPatch(path, data) {
  await fetch(`${SB_URL}/rest/v1/${path}`, {
    method: 'PATCH',
    headers:{ 'Content-Type':'application/json', 'apikey':SB_KEY, 'Authorization':`Bearer ${SB_KEY}` },
    body: JSON.stringify(data)
  });
}

// ── INIT APP ────────────────────────────────────────────────────────────────
async function initApp() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');

  const name = currentUser.first_name || currentUser.email.split('@')[0];
  document.getElementById('topbar-user').textContent = name;
  document.getElementById('topbar-avatar').textContent = name[0].toUpperCase();

  // Init push notifications for all users
  initPushNotifications();

  if (currentRole === 'waitlist') {
    initWaitlistExperience();
    return;
  }

  // Check intake gate for new clients (coach bypasses)
  if (currentRole !== 'coach') {
    const gateShowing = await checkIntakeGate();
    if (gateShowing) return; // Intake gate handles the rest
  }

  if (currentRole === 'coach') {
    document.getElementById('coach-screens').style.display = 'block';
    document.getElementById('client-screens').style.display = 'none';
    document.getElementById('coach-nav').style.display = 'flex';
    document.getElementById('client-nav').style.display = 'none';
    loadCoachDashboard();
  } else {
    document.getElementById('coach-screens').style.display = 'none';
    document.getElementById('client-screens').style.display = 'block';
    document.getElementById('coach-nav').style.display = 'none';
    document.getElementById('client-nav').style.display = 'flex';
    loadClientHome();
  }
}

// ── NAVIGATION ──────────────────────────────────────────────────────────────
function coachNav(screen, tab) {
  document.querySelectorAll('#coach-nav .nav-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('#coach-screens .screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${screen}`).classList.add('active');
  document.getElementById('screen-client-detail').style.display = 'none';
  document.getElementById(`screen-${screen}`).style.display = 'block';
}

function clientNav(screen, tab) {
  if (!tab) tab = document.querySelector('#client-nav .nav-tab');
  if (!tab) return;
  document.querySelectorAll('#client-nav .nav-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('#client-screens .screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById('screen-' + screen);
  if (!el) { console.warn('Missing screen:', screen); return; }
  el.classList.add('active');
  el.style.display = 'block';
  // Lazy load screens
  if (screen === 'log') {
    if (!isCohortLive()) {
      // Show locked message but don't redirect
      const logEl = document.getElementById('session-log-content');
      if (logEl) {
        logEl.style.display = 'block';
        logEl.innerHTML = '<div class="ci-locked-banner"><div class="ci-locked-title">Sessions unlock on ' + (getActiveCohort().cohort.start.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})) + '</div><div class="ci-locked-sub">Your programme begins on cohort start day. Check your nutrition targets and explore the app in the meantime.</div></div>';
      }
      return;
    }
    loadLogScreen();
  }
  if (screen === 'nutrition')   loadNutritionTab();  // waitlist gets full nutrition access
  if (screen === 'alumni')      { /* alumni screen is static HTML */ }
  if (screen === 'brotherhood') {
    if (currentRole === 'waitlist') loadBrotherhoodWaitlist();
    else loadBrotherhood();
  }
  if (screen === 'projection') loadProjectionTab();
  if (screen !== 'brotherhood') stopBhPolling();
  if (screen === 'progress') {
    if (!isCohortLive()) {
      showToast('Full progress tracking unlocks when the cohort begins.');
    }
    loadClientProgress([]); // reuse cached or refetch
    loadFitnessTests(currentUser.email);
    // Render KB library with current week
    sbGet(`platform_users?email=eq.${encodeURIComponent(currentUser?.email)}&select=current_week`)
      .then(rows => renderKbLibrary(rows[0]?.current_week || 1))
      .catch(() => renderKbLibrary(1));
  }
}

// ── COACH DASHBOARD ─────────────────────────────────────────────────────────
async function loadCoachDashboard() {
  document.getElementById('overview-date').textContent =
    new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  // Load data
  document.getElementById('client-list').innerHTML = '<div class="spin"></div>';
  const [clients, checkins] = await Promise.all([
    sbGet('platform_users?role=eq.client&order=first_name.asc&select=*'),
    sbGet('checkin_submissions?order=created_at.desc&limit=200&select=*'),
  ]);

  allClients  = clients;
  allCheckins = checkins;

  renderCoachOverview();
  renderClientList();
  renderFlags();
  renderThisWeek();
  renderWins();
}

function renderCoachOverview() {
  const total   = allClients.length;
  const thisWk  = new Date();
  const weekStart = new Date(thisWk.setDate(thisWk.getDate() - thisWk.getDay()));
  const thisWeekCIs = allCheckins.filter(c => new Date(c.created_at) >= weekStart);
  const submitted = new Set(thisWeekCIs.map(c => c.email)).size;
  const missed    = total - submitted;

  const flags = allCheckins
    .filter((c,_,arr) => {
      const clientCIs = arr.filter(x => x.email === c.email);
      const latest = clientCIs[0];
      return latest && latest.id === c.id && (c.overall_score <= 4);
    }).length;

  const wins = allCheckins.filter(c => {
    const d = new Date(c.created_at);
    return d >= weekStart && c.overall_score >= 9;
  }).length;

  document.getElementById('coach-stats').innerHTML = `
    <div class="stat-card"><div class="stat-val" style="color:var(--gold)">${total}</div><div class="stat-lbl">Total Clients</div></div>
    <div class="stat-card good"><div class="stat-val" style="color:var(--greenl)">${submitted}</div><div class="stat-lbl">Checked In</div></div>
    <div class="stat-card ${missed>0?'alert':''}"><div class="stat-val" style="color:${missed>0?'#E24B4A':'var(--ash)'}">${missed}</div><div class="stat-lbl">Not Submitted</div></div>
    <div class="stat-card ${flags>0?'alert':''}"><div class="stat-val" style="color:${flags>0?'#E24B4A':'var(--ash)'}">${flags}</div><div class="stat-lbl">Red Flags</div></div>
  `;

  // Update badge
  if (flags > 0) {
    document.getElementById('flags-badge').style.display = 'flex';
    document.getElementById('flags-badge').textContent = flags;
  }
}

function renderClientList() {
  const el = document.getElementById('client-list');
  if (!allClients.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">👤</div><div class="empty-text">No clients yet. Add clients in Supabase → platform_users.</div></div>';
    return;
  }

  el.innerHTML = allClients.map(client => {
    const clientCIs = allCheckins.filter(c => c.email === client.email);
    const latest    = clientCIs[0];
    const score     = latest?.overall_score;
    const flagColor = !latest ? 'flag-none' : score <= 4 ? 'flag-red' : score <= 6 ? 'flag-amber' : 'flag-green';
    const initials  = ((client.first_name||'?')[0] + (client.last_name||'')[0]).toUpperCase();
    const isOnline  = client.client_type === 'online';
    const scoreColor = score ? (score>=8?'var(--greenl)':score>=5?'var(--gold)':'#E24B4A') : 'var(--ash)';

    return `
      <div class="client-row" onclick="showClientDetail('${client.email}')">
        <div class="cr-avatar ${isOnline?'online-client':''}">${initials}</div>
        <div class="cr-info">
          <div class="cr-name">${client.first_name||''} ${client.last_name||''}</div>
          <div class="cr-meta">Wk ${client.current_week||1} · ${client.current_phase||'The Forge'} · ${isOnline?'Online':'In-person'}</div>
        </div>
        <div class="cr-right">
          <div class="cr-score" style="color:${scoreColor}">${score||'—'}<span class="cr-flag ${flagColor}"></span></div>
          <div class="cr-date">${latest?new Date(latest.created_at).toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'No check-in'}</div>
        </div>
      </div>`;
  }).join('');
}

function renderFlags() {
  const clientLatest = {};
  allCheckins.forEach(c => {
    if (!clientLatest[c.email]) clientLatest[c.email] = c;
  });

  const flagged = Object.values(clientLatest).filter(c => c.overall_score <= 4);
  const el = document.getElementById('flags-list');

  if (!flagged.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">✅</div><div class="empty-text">No red flags this week. All clients above threshold.</div></div>';
    return;
  }

  el.innerHTML = flagged.map(c => {
    const client = allClients.find(u => u.email === c.email);
    const name = client ? `${client.first_name} ${client.last_name}` : c.first_name || c.email;
    return `
      <div class="red-flag-row">
        <div class="rfr-top">
          <div class="rfr-name">${name}</div>
          <div class="rfr-score">${c.overall_score}/10</div>
        </div>
        <div class="rfr-reason">
          Week ${c.week_number} · Commitment: ${c.commitment||'—'}<br>
          ${c.message_for_mike?`"${c.message_for_mike}"` : 'No message left for Mike'}
        </div>
        <div class="rfr-action">
          <button class="btn-sm btn-sms" onclick="sendSMS('${c.email}','${name}')">📱 Text ${name.split(' ')[0]}</button>
          <button class="btn-sm btn-call" onclick="showClientDetail('${c.email}')">View Profile</button>
        </div>
      </div>`;
  }).join('');
}

function renderThisWeek() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0,0,0,0);

  const thisWeek = allCheckins.filter(c => new Date(c.created_at) >= weekStart)
    .sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

  const el = document.getElementById('week-checkins');
  if (!thisWeek.length) {
    el.innerHTML = '<div class="empty" style="padding:24px"><div class="empty-icon">📭</div><div class="empty-text">No check-ins this week yet.</div></div>';
    return;
  }

  el.innerHTML = thisWeek.map(c => {
    const scores = [
      ['Overall', c.overall_score],
      ['Train', c.training_score],
      ['Nutr', c.nutrition_score],
      ['Mind', c.mindset_score],
    ].filter(([,v]) => v != null);

    return `
      <div class="checkin-row">
        <div class="ci-top">
          <div class="ci-name">${c.first_name||c.email} — Wk ${c.week_number}</div>
          <div class="ci-time">${new Date(c.created_at).toLocaleDateString('en-GB',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</div>
        </div>
        <div class="ci-scores">
          ${scores.map(([lbl,val]) => `
            <span class="ci-score-pill ${val>=8?'high':val<=4?'low':''}">${lbl}: ${val}</span>
          `).join('')}
          ${c.weight_kg ? `<span class="ci-score-pill">${c.weight_kg}kg</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

function renderWins() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());

  const wins = allCheckins.filter(c => {
    const d = new Date(c.created_at);
    return d >= weekStart && c.overall_score >= 9;
  });

  const el = document.getElementById('wins-list');
  if (!wins.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🏆</div><div class="empty-text">No 9–10 scores yet this week. Keep pushing.</div></div>';
    return;
  }

  el.innerHTML = wins.map(c => {
    const client = allClients.find(u => u.email === c.email);
    const name = client ? `${client.first_name} ${client.last_name}` : c.first_name || c.email;
    return `
      <div class="win-row">
        <div class="win-icon">${c.overall_score===10?'🔥':'⚔️'}</div>
        <div class="win-info">
          <div class="win-name">${name}</div>
          <div class="win-detail">Week ${c.week_number} · Score ${c.overall_score}/10 · ${c.commitment==='all_in'?'All in 🛡️':c.commitment||''}</div>
        </div>
        <button class="btn-celebrate" onclick="celebrateSMS('${c.email}','${name.split(' ')[0]}',${c.overall_score})">🎉 Celebrate</button>
      </div>`;
  }).join('');
}

// ── CLIENT DETAIL ────────────────────────────────────────────────────────────
async function showClientDetail(email) {
  const detailEl = document.getElementById('screen-client-detail');
  detailEl.style.display = 'block';
  detailEl.classList.add('active');
  document.getElementById('screen-overview').classList.remove('active');

  const content = document.getElementById('client-detail-content');
  content.innerHTML = `
    <div class="back-btn" onclick="closeClientDetail()">← Back</div>
    <div class="spin"></div><div class="loading-msg">Loading client data...</div>`;

  const [client, checkins, baselines] = await Promise.all([
    sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=*`),
    sbGet(`checkin_submissions?email=eq.${encodeURIComponent(email)}&order=week_number.asc&select=*`),
    sbGet(`client_baselines?email=eq.${encodeURIComponent(email)}&select=*`),
  ]);

  const u = client[0] || {};
  const latest = checkins.length ? checkins[checkins.length-1] : {};
  const baseline = baselines[0] || {};
  const name = `${u.first_name||''} ${u.last_name||''}`.trim() || email;
  const initials = name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const isOnline = u.client_type === 'online';
  const avgScore = checkins.length ? Math.round(checkins.reduce((a,c)=>a+(c.overall_score||0),0)/checkins.length) : null;

  const wDelta = latest.weight_kg && baseline.weight_kg ? (latest.weight_kg - baseline.weight_kg).toFixed(1) : null;
  const waistDelta = latest.waist_in && baseline.waist_in ? (latest.waist_in - baseline.waist_in).toFixed(1) : null;

  content.innerHTML = `
    <div class="back-btn" onclick="closeClientDetail()">← All Clients</div>

    <div class="client-hero">
      <div class="ch-avatar" style="background:${isOnline?'var(--blue)':'var(--crimson)'}">${initials}</div>
      <div>
        <div class="ch-name">${name}</div>
        <div class="ch-meta">
          ${isOnline?'Online Client':'In-Person'} · Week ${u.current_week||1} · ${u.current_phase||'The Forge'}<br>
          ${u.email} · ${checkins.length} check-ins submitted
        </div>
      </div>
    </div>

    <div class="metric-grid">
      <div class="metric">
        <div class="metric-val" style="color:${avgScore?avgScore>=8?'var(--greenl)':avgScore>=5?'var(--gold)':'#E24B4A':'var(--ash)'}">${avgScore||'—'}</div>
        <div class="metric-lbl">Avg Score</div>
      </div>
      <div class="metric">
        <div class="metric-val" style="color:${wDelta?(parseFloat(wDelta)<0?'var(--greenl)':'#E24B4A'):'var(--ash)'}">${wDelta!=null?(wDelta>0?'+':'')+wDelta+'kg':'—'}</div>
        <div class="metric-lbl">Weight Δ</div>
      </div>
      <div class="metric">
        <div class="metric-val" style="color:${waistDelta?(parseFloat(waistDelta)<0?'var(--greenl)':'#E24B4A'):'var(--ash)'}">${waistDelta!=null?(waistDelta>0?'+':'')+waistDelta+'"':'—'}</div>
        <div class="metric-lbl">Waist Δ</div>
      </div>
    </div>

    ${latest.week_number ? `
    <div class="section-label">LATEST CHECK-IN — WEEK ${latest.week_number}</div>
    <div class="card">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
        ${[['Overall',latest.overall_score],['Training',latest.training_score],['Nutrition',latest.nutrition_score],['Mindset',latest.mindset_score],['Energy',latest.energy_score]].map(([l,v])=>`
          <div style="text-align:center">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:${v?v>=8?'var(--greenl)':v>=5?'var(--gold)':'#E24B4A':'var(--ash)'}">${v||'—'}</div>
            <div style="font-size:10px;color:var(--ash);text-transform:uppercase;letter-spacing:1px">${l}</div>
          </div>`).join('')}
      </div>
      ${latest.message_for_mike ? `<div style="font-size:13px;color:var(--al);background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.15);border-radius:6px;padding:10px 12px;line-height:1.6"><strong style="color:var(--gold-light);display:block;font-size:11px;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">For Mike</strong>${latest.message_for_mike}</div>` : ''}
    </div>` : ''}

    <div class="section-label">ACTIONS</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
      <button class="auth-btn" style="padding:11px;font-size:14px" onclick="window.open('${URLS.report4w}?email=${encodeURIComponent(email)}')">4-Week Report</button>
      <button class="auth-btn" style="padding:11px;font-size:14px;background:rgba(201,168,76,.2);border:1px solid var(--gold);color:var(--gold)" onclick="window.open('${URLS.report16w}?email=${encodeURIComponent(email)}')">16-Week Report</button>
      <button class="btn-sm btn-sms" style="padding:11px;width:100%" onclick="sendSMS('${email}','${name.split(' ')[0]}')">📱 Send Message</button>
      <button class="btn-sm btn-call" style="padding:11px;width:100%" onclick="window.location.href='mailto:${email}'">📧 Email Client</button>
    </div>

    <div class="section-label">RECENT SESSIONS LOGGED</div>
    <div class="card" id="coach-sessions-placeholder" style="padding:12px 16px;margin-bottom:14px">
      <div style="font-size:12px;color:var(--ash)">Loading...</div>
    </div>
        <div class="section-label">CHECK-IN HISTORY</div>
    <div class="card" style="padding:0 16px">
      ${checkins.length ? [...checkins].reverse().slice(0,8).map(c => `
        <div class="checkin-row">
          <div class="ci-top">
            <div style="font-size:13px;font-weight:500;color:#fff">Week ${c.week_number} · ${c.programme_phase||''}</div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:${c.overall_score>=8?'var(--greenl)':c.overall_score>=5?'var(--gold)':'#E24B4A'}">${c.overall_score||'—'}</div>
          </div>
          <div style="font-size:11px;color:var(--ash)">${c.weight_kg?c.weight_kg+'kg · ':''}${c.waist_in?c.waist_in+'" waist · ':''}${new Date(c.created_at).toLocaleDateString('en-GB')}</div>
        </div>`).join('') : '<div class="empty" style="padding:20px"><div class="empty-text">No check-ins yet</div></div>'}
    </div>
  `;

  // Load session history after detail renders
  loadCoachClientSessions(email);
}

function closeClientDetail() {
  document.getElementById('screen-client-detail').style.display = 'none';
  document.getElementById('screen-overview').classList.add('active');
}

// ── COACH CLIENT SESSIONS ───────────────────────────────────────────────────
async function loadCoachClientSessions(email) {
  const el = document.getElementById('coach-sessions-placeholder');
  if (!el) return;
  try {
    const sl = await sbGet(`session_logs?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=20&select=*`);
    if (!sl.length) {
      el.innerHTML = '<div style="font-size:12px;color:var(--ash)">No sessions logged yet.</div>';
      return;
    }
    const bySession = {};
    sl.forEach(l => {
      const key = l.session_name + ' Wk' + l.week_number;
      if (!bySession[key]) bySession[key] = {name:l.session_name, week:l.week_number, sets:[]};
      bySession[key].sets.push(l);
    });
    el.innerHTML = Object.values(bySession).slice(0,5).map(s =>
      `<div style="padding:7px 0;border-bottom:1px solid rgba(42,42,42,.5)">
        <div style="display:flex;justify-content:space-between;margin-bottom:3px">
          <span style="font-size:13px;font-weight:500;color:#fff">${s.name} — Wk ${s.week}</span>
          <span style="font-size:11px;color:var(--ash)">${s.sets.length} sets</span>
        </div>
        ${s.sets.slice(0,3).map(set =>
          `<div style="font-size:11px;color:var(--al)">${set.exercise_name} · ${set.weight_kg ? set.weight_kg+'kg' : 'BW'} × ${set.reps_actual||'?'} reps</div>`
        ).join('')}
      </div>`
    ).join('');
  } catch(e) {
    el.innerHTML = '<div style="font-size:12px;color:var(--ash)">Could not load sessions.</div>';
  }
}

// ── CLIENT HOME ──────────────────────────────────────────────────────────────
async function loadClientHome() {
  const email = currentUser.email;
  const [checkins, userRec] = await Promise.all([
    sbGet(`checkin_submissions?email=eq.${encodeURIComponent(email)}&order=week_number.asc&select=*`),
    sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=*`),
  ]);

  const user    = userRec[0] || currentUser;
  const week    = user.current_week || 1;
  const phase   = user.current_phase || 'The Forge';
  const pct     = Math.round((week/16)*100);
  const isOnline = (user.client_type || currentUser.client_type) === 'online';

  document.getElementById('ps-phase').textContent = phase;
  document.getElementById('ps-week').textContent  = `Week ${week} of 16`;
  document.getElementById('ps-prog').style.width  = pct + '%';
  document.getElementById('ps-pct').textContent   = pct + '%';

  // Show pre-cohort banner if cohort not yet started, but don't block
  if (checkCohortGate()) {
    renderPreCohortBanner(week);
    // Don't return — still load home content so tabs work
  }

  // Load this week's AI coaching plan
  loadCoachingPlanCard(email, week);

  // Women's cycle card (visible, prominent, top of home)
  renderCycleHomeCard(user, checkins);

  // Sunday check-in prompt
  renderSundayPrompt(week);

  // Render this week's knowledge base article card
  renderKbWeeklyCard(week);

  // 300 Test countdown
  render300TestCountdown(week);

  // AI coaching plan card
  loadCoachingPlanCard(email);

  // Load today's recovery score if already completed
  const todayStr  = new Date().toISOString().split('T')[0];
  const doneKey2  = `ps_done_${todayStr}_${email}`;
  const cachedPS  = localStorage.getItem(doneKey2);
  if (cachedPS) {
    try {
      const ps = JSON.parse(cachedPS);
      renderRecoveryBanner(ps.score);
    } catch(_) {}
  } else {
    loadTodayRecovery(email);
  }

  // Today's session
  const todayIdx = new Date().getDay(); // 0=Sun
  const sessions = [
    {day:'Monday',    name:'Phalanx',    icon:'🏋️', type:'Lower Compound', format:'Strength'},
    {day:'Tuesday',   name:'The Hunt',   icon:'🏃', type:'Conditioning + Strongman', format:'IWT'},
    {day:'Wednesday', name:'The Spear',  icon:'⚔️', type:'Upper Push + Pull', format:'Strength Circuit'},
    {day:'Thursday',  name:'Krypteia',   icon:'🔥', type:'Strongman + Rotational', format:'EMOM'},
    {day:'Friday',    name:'Agoge',      icon:'⚡', type:'Athletic + Power', format:'EMOM Circuit'},
    {day:'Saturday',  name:'Lakedaimon', icon:'🛡️', type:'Full Body Flush', format:'Circuit'},
  ];

  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today    = dayNames[todayIdx];
  const todaySess= sessions.find(s => s.day === today);

  const todayEl  = document.getElementById('today-session');
  const labelEl  = document.getElementById('today-session-label');

  if (isOnline) {
    // Online client — use ONLINE_PHASES data
    const dayMap = {Monday:0,Tuesday:1,Wednesday:2,Thursday:3,Friday:4,Saturday:5};
    const dayIdx = dayMap[today];
    if (todayIdx === 0 || dayIdx === undefined) {
      labelEl.textContent = 'TODAY — REST DAY';
      todayEl.innerHTML = `<div class="card" style="text-align:center;padding:20px"><div style="font-size:32px;margin-bottom:8px">😴</div><div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:#fff;margin-bottom:4px">Rest Day</div><div style="font-size:13px;color:var(--al)">Recovery is part of the programme.</div></div>`;
    } else {
      const todayData = getOnlineDayData(week, dayIdx);
      labelEl.textContent = `TODAY — ${today.toUpperCase()}`;
      todayEl.innerHTML = renderOnlineSessionCard(todayData, true);
    }
    const weekEl2 = document.getElementById('week-sessions');
    const dayNames2 = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    weekEl2.innerHTML = dayNames2.map((d,di) => renderOnlineSessionCard(getOnlineDayData(week,di), d===today)).join('');

  } else {
    // In-person client
    if (!todaySess) {
      labelEl.textContent = 'TODAY — REST DAY';
      todayEl.innerHTML = `<div class="card" style="text-align:center;padding:20px"><div style="font-size:32px;margin-bottom:8px">😴</div><div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:#fff;margin-bottom:4px">Sunday — Rest Day</div><div style="font-size:13px;color:var(--al)">The body adapts on Sunday. Non-negotiable.</div></div>`;
    } else {
      labelEl.textContent = `TODAY — ${today.toUpperCase()}`;
      todayEl.innerHTML = renderSessionCard(todaySess, week, phase, true, isTestWeek);
    }
    const weekEl = document.getElementById('week-sessions');
    weekEl.innerHTML = sessions.map(s => renderSessionCard(s, week, phase, s.day===today, isTestWeek)).join('');
  }

  // Check if alumni status should be shown
  checkAlumniStatus(week, isOnline ? 'online' : 'in_person');

  // Show correct calendar based on client type
  const calIP = document.getElementById('cal-inperson');
  const calON = document.getElementById('cal-online');
  if (isOnline) {
    if (calIP) calIP.style.display = 'none';
    if (calON) calON.style.display = 'block';
    document.getElementById('book-title').textContent = 'Book a Call';
    document.getElementById('book-sub').textContent = 'Schedule your strategy call with Mike';
  } else {
    if (calIP) calIP.style.display = 'block';
    if (calON) calON.style.display = 'none';
    document.getElementById('book-title').textContent = 'Book a Session';
    document.getElementById('book-sub').textContent = 'Select a time below';
  }

  // Load last check-in
  const latest = checkins.length ? checkins[checkins.length-1] : null;
  const ciEl   = document.getElementById('last-checkin-summary');
  if (latest) {
    ciEl.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <div style="font-size:13px;color:var(--al)">Week ${latest.week_number} · ${new Date(latest.created_at).toLocaleDateString('en-GB')}</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:${latest.overall_score>=8?'var(--greenl)':latest.overall_score>=5?'var(--gold)':'#E24B4A'}">${latest.overall_score}/10</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">
          ${[['Train',latest.training_score],['Nutr',latest.nutrition_score],['Mind',latest.mindset_score],['Energy',latest.energy_score]].map(([l,v])=>`
            <div style="text-align:center;background:var(--cm);border-radius:6px;padding:7px">
              <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--gl)">${v||'—'}</div>
              <div style="font-size:9px;color:var(--ash);text-transform:uppercase;letter-spacing:1px">${l}</div>
            </div>`).join('')}
        </div>
      </div>`;
  } else {
    ciEl.innerHTML = `<div class="card" style="text-align:center;padding:16px;color:var(--ash);font-size:13px">No check-ins submitted yet. Submit your first check-in on Sunday.</div>`;
  }

  // Load progress
  loadClientProgress(checkins);
}

function renderSessionCard(sess, week, phase, isToday, isTestWeek=false) {
  const loads = getSessionLoads(sess.name, week, phase);
  return `
    <div class="session-card" style="${isToday?'border-color:rgba(201,168,76,.4)':''}">
      <div class="sc-head">
        <div>
          <div class="sc-name">${sess.icon} ${sess.name}</div>
          <div class="sc-day">${sess.day} · ${sess.type}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          ${isToday?'<div class="today-badge">TODAY</div>':''}
          <div class="sc-format">${sess.format}</div>
        </div>
      </div>
      <div class="sc-body">
        ${loads.map(station => `
          <div class="station">
            <div class="stn-label">${station.label}</div>
            <div class="stn-exercises">
              ${station.exercises.map(ex => `
                <div class="stn-ex">
                  <span class="stn-ex-name">${ex.name}</span>
                  <span class="stn-ex-sets">${ex.sets}</span>
                </div>`).join('')}
            </div>
          </div>`).join('')}
        ${isTestWeek ? `<div class="sc-injury" style="border-color:rgba(201,168,76,.4);color:var(--gold);background:rgba(201,168,76,.06)">⚔️ Testing week — Monday: 300 Test · Tuesday: SPM Battery. Record all results in the Progress tab.</div>` : ''}
        ${loads[0]?.injury ? `<div class="sc-injury">${loads[0].injury}</div>` : ''}
        ${loads[0]?.coaching ? `<div class="sc-coaching">${loads[0].coaching}</div>` : ''}
      </div>
    </div>`;
}

// ── ONLINE CLIENT SESSION DATA ───────────────────────────────────────────────
function getOnlineDayData(week, dayIdx) {
  // Find the week in ONLINE_PHASES
  // ONLINE_PHASES: array of phases, each with weeks array
  if (typeof ONLINE_PHASES === 'undefined') return null;
  for (const phase of ONLINE_PHASES) {
    if (!phase.weeks) continue;
    for (const wk of phase.weeks) {
      const wkNum = parseInt((wk.label||'').replace('Week ',''));
      if (wkNum === week) {
        return wk.days && wk.days[dayIdx] ? {
          weekData: wk,
          day: wk.days[dayIdx],
          phaseName: phase.name,
        } : null;
      }
    }
  }
  return null;
}

function renderOnlineSessionCard(dayData, isToday) {
  if (!dayData) return `<div class="card" style="text-align:center;padding:20px;color:var(--ash)">Rest day</div>`;
  const { day, weekData } = dayData;
  const isTestWeek = [1,8,15].includes(parseInt((weekData.label||'').replace('Week ','')));

  const blocksHtml = (day.blocks||[]).map(block => {
    const mod = block.mod || day.type || '';
    const modColor = (typeof MODALITY_COLORS !== 'undefined' && MODALITY_COLORS[mod])
      ? MODALITY_COLORS[mod].c : 'var(--gold)';
    return `
      <div class="station" style="border-color:${modColor};margin-bottom:10px">
        <div class="stn-label" style="color:${modColor}">${block.label||''} ${block.mod?'<span style="font-size:9px;opacity:.7">· '+block.mod+'</span>':''}</div>
        ${block.fmt ? `<div style="font-size:11px;color:var(--ash);margin-bottom:4px;font-style:italic">${block.fmt}</div>` : ''}
        <div class="stn-exercises">
          ${(block.ex||[]).map(([name,sets,note]) => `
            <div class="stn-ex">
              <span class="stn-ex-name">${name}${note?`<span style="font-size:10px;color:var(--ash);margin-left:4px">${note}</span>`:''}
              </span>
              <span class="stn-ex-sets">${sets}</span>
            </div>`).join('')}
        </div>
        ${block.scale ? `<div style="font-size:10px;color:var(--ash);margin-top:4px;font-style:italic">Scale: ${block.scale}</div>` : ''}
      </div>`;
  }).join('');

  return `
    <div class="session-card" style="${isToday?'border-color:rgba(201,168,76,.4)':''}">
      <div class="sc-head">
        <div>
          <div class="sc-name">${day.theme||'Session'}</div>
          <div class="sc-day">${day.focus||''}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          ${isToday?'<div class="today-badge">TODAY</div>':''}
          <div class="sc-format">${day.type||''}</div>
        </div>
      </div>
      <div class="sc-body">
        <div class="sc-stations">${blocksHtml}</div>
        ${isTestWeek ? `<div class="sc-injury" style="border-color:rgba(201,168,76,.4);color:var(--gold);background:rgba(201,168,76,.06)">⚔️ Testing week — 300 Test · SPM Battery. Record all results in Progress tab.</div>` : ''}
      </div>
    </div>`;
}

function getSessionLoads(sessionName, week, phase) {
  // Load and %1RM based on phase
  const pct = phase==='The Forge' ? (week<=2?'65%':week===3?'70–75%':'60–65% deload') :
              phase==='Armour'    ? (week<=7?'80–85%':'60% deload') :
              phase==='War'       ? (week<=10?'88–92%':week===11?'90%':'60% deload') :
                                    (week<=15?'90–95%':'taper');

  const sessions = {
    'Phalanx': [{
      label:'STN A — Racks',
      exercises:[
        {name:'Barbell Back Squat', sets:`4×8 @${pct}`},
        {name:'Romanian Deadlift',  sets:'4×8  3s eccentric'},
        {name:'Barbell Hip Thrust', sets:'3×12  3s hold'},
      ],
      injury:'Monday lower body loading. Warm-up: hip flexors + thoracic mobility before barbell.',
      coaching:'Check squat depth — chest up, knees track toes, brace before descent.'
    },{
      label:'STN C — Cardio',
      exercises:[{name:'Machine Effort 500m', sets:'×4  threshold pace · 90s rest'}]
    },{
      label:'STN E — Floor',
      exercises:[
        {name:'Bulgarian Split Squat', sets:'3×10 each'},
        {name:'Box Jump',              sets:'3×8  land soft'},
        {name:'Farmers Walk',          sets:'2×30m  heavy KBs'},
      ]
    }],
    'The Hunt': [{
      label:'STN C — Cardio IWT',
      exercises:[
        {name:'Machine Sprint 300m', sets:'×5  max pace'},
        {name:'KB Swing',            sets:'10 reps'},
        {name:'Push-Up',             sets:'8 reps · 90s rest'},
      ]
    },{
      label:'STN D — Strongman',
      exercises:[
        {name:'Tyre Flip',       sets:'6 reps'},
        {name:'Prowler Push',    sets:'20m'},
        {name:'Battle Ropes',    sets:'30s waves'},
        {name:'Tyre Rope Drag',  sets:'20m backwards'},
      ]
    },{
      label:'STN E — Floor',
      exercises:[
        {name:'Med Ball Rotational Throw', sets:'8 each'},
        {name:'Med Ball Slam',             sets:'10 reps'},
        {name:'Box Jump',                  sets:'8 reps'},
      ]
    }],
    'The Spear': [{
      label:'STN A — Racks',
      exercises:[
        {name:'Bench Press', sets:`4×8 @${pct}`},
        {name:'Pull-Ups',    sets:'4×AMRAP  full ROM'},
        {name:'Dips',        sets:'3×AMRAP'},
      ]
    },{
      label:'STN B — TRX + Landmine',
      exercises:[
        {name:'Landmine Clean & Press', sets:'3×8 each'},
        {name:'TRX Row',                sets:'3×15'},
        {name:'Band Face Pull',         sets:'3×20'},
        {name:'TRX Bodysaw',            sets:'3×10'},
      ]
    },{
      label:'STN C — Cardio',
      exercises:[{name:'Machine Effort 400m', sets:'×3  moderate · 90s rest'}]
    }],
    'Krypteia': [{
      label:'STN D — Strongman EMOM',
      exercises:[
        {name:'Tyre Flip',       sets:'5 reps — odd mins'},
        {name:'Sledgehammer',    sets:'10 each side — even mins'},
      ],
      injury:'Tyre flips — hip hinge only. No rounded back.'
    },{
      label:'STN B — TRX + Bands',
      exercises:[
        {name:'TRX Power Pull',   sets:'4×10 each'},
        {name:'Band Pull-Apart',  sets:'4×20'},
        {name:'Band Pallof Press',sets:'4×10 each · 2s hold'},
      ]
    },{
      label:'STN C — Cardio',
      exercises:[{name:'Machine Effort 300m', sets:'×5  moderate · 90s rest'}]
    }],
    'Agoge': [{
      label:'STN B — Landmine + TRX',
      exercises:[
        {name:'Landmine Rotation', sets:'8 each — EMOM odd'},
        {name:'TRX Power Pull',    sets:'10 each — EMOM even'},
      ]
    },{
      label:'STN E — DB + KB + Plyo',
      exercises:[
        {name:'DB Snatch',   sets:'3×6 each'},
        {name:'KB Swing',    sets:'3×15'},
        {name:'Box Jump',    sets:'3×8  land soft'},
        {name:'Broad Jump',  sets:'3×6  max distance'},
      ],
      injury:'Box jumps — land soft knees, full foot contact.'
    },{
      label:'STN C — Sprint AMRAP',
      exercises:[{name:'250m Machine Sprint + 8 Box Jumps', sets:'AMRAP 12 — record rounds'}]
    }],
    'Lakedaimon': [{
      label:'STN A — Light Racks',
      exercises:[
        {name:'Barbell Back Squat',  sets:'3×10 @60–65%'},
        {name:'Romanian Deadlift',   sets:'3×10  3s eccentric'},
        {name:'Barbell Push Press',  sets:'3×8 @60%'},
      ],
      coaching:'Saturday — conservative loading. If fatigued, scale without question.'
    },{
      label:'STN D — Strongman',
      exercises:[
        {name:'Tyre Flip',       sets:'5 reps'},
        {name:'Battle Ropes',    sets:'30s waves'},
        {name:'Tyre Rope Drag',  sets:'20m backwards'},
      ]
    },{
      label:'STN E — KB + Med Ball AMRAP',
      exercises:[
        {name:'KB Swing 20kg',   sets:'10 reps'},
        {name:'Med Ball Slam',   sets:'8 reps'},
        {name:'KB Goblet Squat', sets:'8 reps'},
        {name:'Bear Crawl',      sets:'15m · AMRAP 15'},
      ]
    }],
  };

  return sessions[sessionName] || [{label:'Session',exercises:[{name:sessionName,sets:'As programmed'}]}];
}

function loadClientProgress(checkins) {
  const el = document.getElementById('progress-metrics');
  const sub = document.getElementById('progress-sub');
  // Show gender-specific coaching sections
  const sex = currentUser?.sex || '';
  const womensEl = document.getElementById('womens-section');
  const mensEl   = document.getElementById('mens-section');
  if (womensEl && sex === 'female') {
    womensEl.style.display = 'block';
    loadWomensSection(checkins);
  }
  if (mensEl && sex !== 'female') {
    mensEl.style.display = 'block';
    loadMensSection();
  }

  if (!checkins.length) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--ash);font-size:13px">No data yet — submit your first check-in on Sunday.</div>';
    return;
  }

  const latest = checkins[checkins.length-1];
  const first  = checkins[0];
  const avgScore = Math.round(checkins.reduce((a,c)=>a+(c.overall_score||0),0)/checkins.length);
  const wDelta   = latest.weight_kg && first.weight_kg ? (latest.weight_kg-first.weight_kg).toFixed(1) : null;
  const waDelta  = latest.waist_in  && first.waist_in  ? (latest.waist_in -first.waist_in ).toFixed(1) : null;

  sub.textContent = `${checkins.length} check-ins submitted · ${checkins.length} weeks tracked`;

  // Check check-in milestones
  if (checkins.length > 0) {
    const latest  = checkins[checkins.length - 1];
    const prev    = checkins.length >= 2 ? checkins[checkins.length - 2] : null;
    const week    = latest.week_number || checkins.length;
    setTimeout(() => checkCheckinMilestones(
      checkins.length,
      latest.overall_score,
      prev?.overall_score,
      week
    ), 500);
  }

  el.innerHTML = [
    ['Avg Score', avgScore||'—', avgScore?avgScore>=8?'var(--greenl)':avgScore>=5?'var(--gold)':'#E24B4A':'var(--ash)'],
    ['Weight Δ',  wDelta!=null?(wDelta>0?'+':'')+wDelta+'kg':'—', wDelta?(parseFloat(wDelta)<0?'var(--greenl)':'#E24B4A'):'var(--ash)'],
    ['Waist Δ',   waDelta!=null?(waDelta>0?'+':'')+waDelta+'"':'—', waDelta?(parseFloat(waDelta)<0?'var(--greenl)':'#E24B4A'):'var(--ash)'],
  ].map(([lbl,val,color])=>`
    <div class="metric">
      <div class="metric-val" style="color:${color}">${val}</div>
      <div class="metric-lbl">${lbl}</div>
    </div>`).join('');

  const histEl = document.getElementById('score-history');
  histEl.innerHTML = [...checkins].reverse().slice(0,8).map(c=>`
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(42,42,42,.5)">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--ash);width:60px">Wk ${c.week_number}</div>
      <div style="flex:1;height:4px;background:var(--bd);border-radius:2px;overflow:hidden">
        <div style="height:100%;width:${(c.overall_score||0)*10}%;background:${c.overall_score>=8?'var(--greenl)':c.overall_score>=5?'var(--gold)':'#E24B4A'};border-radius:2px"></div>
      </div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:${c.overall_score>=8?'var(--greenl)':c.overall_score>=5?'var(--gold)':'#E24B4A'};width:32px;text-align:right">${c.overall_score||'—'}</div>
    </div>`).join('');
}

// ── ACTIONS ─────────────────────────────────────────────────────────────────
function sendSMS(email, firstName) {
  const msg = encodeURIComponent(`Hi ${firstName}, just seen your check-in. Wanted to reach out personally — Mike`);
  window.location.href = `sms:?&body=${msg}`;
}

function celebrateSMS(email, firstName, score) {
  const msgs = [
    `${firstName} — ${score}/10. That is elite. 🔥 Keep building. - Mike`,
    `${firstName} — ${score}/10 this week. That is Spartan level. You are proving something. 🛡️ - Mike`,
  ];
  const msg = encodeURIComponent(msgs[Math.floor(Math.random()*msgs.length)]);
  window.location.href = `sms:?&body=${msg}`;
}

function openCheckin()   { window.open(URLS.checkin); }
function openNutrition() { window.open(URLS.nutrition); }
// Booking handled via embedded calendar iframes

// ── PWA INSTALL PROMPT ───────────────────────────────────────────────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('s16_install_dismissed')) {
    setTimeout(showInstallPrompt, 2000);
  }
});

function showInstallPrompt() {
  if (!document.getElementById('app-shell').classList.contains('hidden')) {
    const prompt = document.createElement('div');
    prompt.className = 'install-prompt';
    prompt.id = 'install-prompt';
    prompt.innerHTML = `
      <div class="ip-text"><strong>Add Spartan16 to Home Screen</strong>Access your programme instantly, offline.</div>
      <button class="ip-btn" onclick="installApp()">Install</button>
      <div class="ip-close" onclick="dismissInstall()">✕</div>`;
    document.body.appendChild(prompt);
  }
}

async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
  dismissInstall();
}

function dismissInstall() {
  localStorage.setItem('s16_install_dismissed', '1');
  document.getElementById('install-prompt')?.remove();
}

// ── SESSION EXERCISES PER SESSION TYPE ──────────────────────────────────────
const SESSION_EXERCISES = {
  'Phalanx': [
    {name:'Barbell Back Squat', station:'A', sets:4, repsTarget:8},
    {name:'Romanian Deadlift',  station:'A', sets:4, repsTarget:8},
    {name:'Barbell Hip Thrust', station:'A', sets:3, repsTarget:12},
    {name:'Machine Cardio 500m',station:'C', sets:4, repsTarget:1},
    {name:'Bulgarian Split Squat',station:'E', sets:3, repsTarget:10},
    {name:'Box Jump',           station:'E', sets:3, repsTarget:8},
  ],
  'The Hunt': [
    {name:'Machine Sprint 300m',station:'C', sets:5, repsTarget:1},
    {name:'KB Swing',           station:'C', sets:5, repsTarget:10},
    {name:'Push-Up',            station:'C', sets:5, repsTarget:8},
    {name:'Tyre Flip',          station:'D', sets:3, repsTarget:6},
    {name:'Prowler Sled Push',  station:'D', sets:3, repsTarget:1},
    {name:'Battle Ropes',       station:'D', sets:3, repsTarget:1},
  ],
  'The Spear': [
    {name:'Bench Press',        station:'A', sets:4, repsTarget:8},
    {name:'Pull-Ups',           station:'A', sets:4, repsTarget:0},
    {name:'Dips',               station:'A', sets:3, repsTarget:0},
    {name:'Landmine Clean & Press',station:'B', sets:3, repsTarget:8},
    {name:'TRX Row',            station:'B', sets:3, repsTarget:15},
    {name:'Band Face Pull',     station:'B', sets:3, repsTarget:20},
    {name:'Machine Cardio 400m',station:'C', sets:3, repsTarget:1},
  ],
  'Krypteia': [
    {name:'Tyre Flip',          station:'D', sets:8, repsTarget:5},
    {name:'Sledgehammer Slam',  station:'D', sets:8, repsTarget:10},
    {name:'TRX Power Pull',     station:'B', sets:4, repsTarget:10},
    {name:'Band Pull-Apart',    station:'B', sets:4, repsTarget:20},
    {name:'Band Pallof Press',  station:'B', sets:4, repsTarget:10},
    {name:'Machine Cardio 300m',station:'C', sets:5, repsTarget:1},
  ],
  'Agoge': [
    {name:'Landmine Rotation',  station:'B', sets:6, repsTarget:8},
    {name:'TRX Power Pull',     station:'B', sets:6, repsTarget:10},
    {name:'DB Snatch',          station:'E', sets:3, repsTarget:6},
    {name:'KB Swing',           station:'E', sets:3, repsTarget:15},
    {name:'Box Jump',           station:'E', sets:3, repsTarget:8},
    {name:'Machine Sprint 250m',station:'C', sets:1, repsTarget:0},
  ],
  'Lakedaimon': [
    {name:'Barbell Back Squat', station:'A', sets:3, repsTarget:10},
    {name:'Romanian Deadlift',  station:'A', sets:3, repsTarget:10},
    {name:'Barbell Push Press', station:'A', sets:3, repsTarget:8},
    {name:'Tyre Flip',          station:'D', sets:3, repsTarget:5},
    {name:'Battle Ropes',       station:'D', sets:3, repsTarget:1},
    {name:'KB Swing',           station:'E', sets:1, repsTarget:10},
    {name:'Med Ball Slam',      station:'E', sets:1, repsTarget:8},
  ],
};

const SESSION_DAYS = {
  'Phalanx':'Monday','The Hunt':'Tuesday','The Spear':'Wednesday',
  'Krypteia':'Thursday','Agoge':'Friday','Lakedaimon':'Saturday'
};

let currentSessionId = null;
let setData = {}; // {exerciseName: [{reps, weight, rpe}]}
let prevBests = {}; // {exerciseName: {weight, reps}}

// ── LOAD SESSION LOG TAB ─────────────────────────────────────────────────────
async function loadSessionLog() {
  const user    = currentUser;
  const week    = user.current_week || 1;
  const phase   = user.current_phase || 'The Forge';
  const todayIdx= new Date().getDay();
  const dayNames= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today   = dayNames[todayIdx];

  document.getElementById('log-session-sub').textContent =
    `Week ${week} · ${phase} · ${today}`;

  // Session selector
  const sessions = Object.keys(SESSION_EXERCISES);
  const todaySession = Object.entries(SESSION_DAYS).find(([,d])=>d===today)?.[0];

  document.getElementById('log-session-selector').innerHTML = `
    <div class="section-label">SELECT SESSION</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:14px">
      ${sessions.map(s=>`
        <button onclick="selectSession('${s}')" id="ss-${s.replace(/ /g,'_')}"
          class="btn-sm" style="border:1px solid ${s===todaySession?'var(--gold)':'var(--bd)'};
          background:${s===todaySession?'rgba(201,168,76,.1)':'transparent'};
          color:${s===todaySession?'var(--gold)':'var(--al)'};
          border-radius:6px;padding:8px 4px;font-family:'Bebas Neue',sans-serif;
          font-size:11px;letter-spacing:.5px;cursor:pointer;transition:all .15s">
          ${s}
        </button>`).join('')}
    </div>`;

  // Load previous bests
  await loadPrevBests(user.email);

  // Auto-select today's session
  if (todaySession) selectSession(todaySession);
  else selectSession('Phalanx');
}

async function loadPrevBests(email) {
  try {
    const sets = await sbGet(`set_logs?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=200`);
    prevBests = {};
    sets.forEach(s => {
      if (!prevBests[s.exercise_name] || (s.weight_kg && s.weight_kg > (prevBests[s.exercise_name].weight||0))) {
        prevBests[s.exercise_name] = { weight: s.weight_kg, reps: s.reps_actual };
      }
    });
  } catch(e) { console.log('PrevBests error:', e); }
}

function selectSession(sessionName) {
  // Update button styles
  Object.keys(SESSION_EXERCISES).forEach(s => {
    const btn = document.getElementById(`ss-${s.replace(/ /g,'_')}`);
    if (!btn) return;
    btn.style.borderColor = s===sessionName ? 'var(--gold)' : 'var(--bd)';
    btn.style.background  = s===sessionName ? 'rgba(201,168,76,.1)' : 'transparent';
    btn.style.color       = s===sessionName ? 'var(--gold)' : 'var(--al)';
  });

  const exercises = SESSION_EXERCISES[sessionName] || [];
  setData = {};
  exercises.forEach(ex => {
    setData[ex.name] = Array.from({length: ex.sets}, (_,i) => ({
      set: i+1, reps: ex.repsTarget||'', weight: '', rpe: ''
    }));
  });

  renderExercises(sessionName, exercises);
}

function renderExercises(sessionName, exercises) {
  const container = document.getElementById('log-exercises-container');
  const week = currentUser.current_week || 1;
  const phase = currentUser.current_phase || 'The Forge';

  const pct = phase==='The Forge'?(week<=2?'65%':week===3?'72%':'60%'):
              phase==='Armour'?(week<=7?'80–85%':'60%'):
              phase==='War'?(week<=10?'88–92%':'60%'):'90–95%';

  container.innerHTML = `
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600">
      ${sessionName} — Wk ${week} — ${pct}
    </div>
    ${exercises.map(ex => {
      const prev = prevBests[ex.name];
      const sets = setData[ex.name] || [];
      return `
        <div class="exercise-log" id="exlog-${ex.name.replace(/ /g,'_')}">
          <div class="ex-log-name">
            ${ex.name}
            <span style="font-size:10px;color:var(--ash);font-weight:400;text-transform:none;letter-spacing:0"> · STN ${ex.station}</span>
          </div>
          ${prev?.weight ? `<div class="prev-best">Previous best: ${prev.weight}kg × ${prev.reps} reps</div>` : ''}
          <div style="display:grid;grid-template-columns:auto 1fr 1fr 1fr auto;gap:6px;margin-bottom:4px">
            <div class="set-header">SET</div>
            <div class="set-header">WEIGHT kg</div>
            <div class="set-header">REPS</div>
            <div class="set-header">RPE</div>
            <div class="set-header">PB</div>
          </div>
          <div id="sets-${ex.name.replace(/ /g,'_')}">
            ${sets.map((s,i) => renderSetRow(ex.name, i, s, prev)).join('')}
          </div>
          <button class="btn-add-set" onclick="addSet('${ex.name}','${ex.station}')">+ Add set</button>
        </div>`;
    }).join('')}
    <button class="btn-log-session" onclick="saveSession('${sessionName}')">
      ✓ SAVE SESSION
    </button>`;
}

function renderSetRow(exName, idx, set, prev) {
  const safeId = exName.replace(/ /g,'_');
  const isPB = set.weight && prev?.weight && parseFloat(set.weight) > parseFloat(prev.weight);
  return `
    <div style="display:grid;grid-template-columns:auto 1fr 1fr 1fr auto;gap:6px;margin-bottom:4px" id="setrow-${safeId}-${idx}">
      <div class="set-label" style="padding-top:10px">${set.set}</div>
      <input type="number" step="0.5" class="set-input ${isPB?'pb':''}"
        placeholder="${prev?.weight||'kg'}"
        value="${set.weight||''}"
        onchange="updateSet('${exName}',${idx},'weight',this.value)"
        oninput="checkPB('${exName}',${idx},this)">
      <input type="number" class="set-input"
        placeholder="${set.reps||'reps'}"
        value="${set.reps||''}"
        onchange="updateSet('${exName}',${idx},'reps',this.value)">
      <input type="number" min="1" max="10" class="set-input"
        placeholder="RPE"
        value="${set.rpe||''}"
        onchange="updateSet('${exName}',${idx},'rpe',this.value)">
      <div style="padding-top:8px;font-size:14px;cursor:pointer" onclick="removeSet('${exName}',${idx})" title="Remove">✕</div>
    </div>`;
}

function checkPB(exName, idx, input) {
  const prev = prevBests[exName];
  if (prev?.weight && parseFloat(input.value) > parseFloat(prev.weight)) {
    input.classList.add('pb');
  } else {
    input.classList.remove('pb');
  }
  updateSet(exName, idx, 'weight', input.value);
}

function updateSet(exName, idx, field, val) {
  if (!setData[exName]) return;
  setData[exName][idx] = { ...setData[exName][idx], [field]: val };
}

function addSet(exName, station) {
  if (!setData[exName]) setData[exName] = [];
  const prev = prevBests[exName];
  setData[exName].push({ set: setData[exName].length+1, reps:'', weight:'', rpe:'' });
  const container = document.getElementById(`sets-${exName.replace(/ /g,'_')}`);
  const idx = setData[exName].length - 1;
  const div = document.createElement('div');
  div.innerHTML = renderSetRow(exName, idx, setData[exName][idx], prev);
  container.appendChild(div.firstElementChild);
}

function removeSet(exName, idx) {
  if (!setData[exName] || setData[exName].length <= 1) return;
  setData[exName].splice(idx, 1);
  setData[exName].forEach((s,i) => s.set = i+1);
  // Re-render just this exercise
  const exercises = Object.keys(setData);
  const container = document.getElementById(`sets-${exName.replace(/ /g,'_')}`);
  const prev = prevBests[exName];
  container.innerHTML = setData[exName].map((s,i) => renderSetRow(exName, i, s, prev)).join('');
}

async function saveSession(sessionName) {
  const email = currentUser.email;
  const week  = currentUser.current_week || 1;
  const phase = currentUser.current_phase || 'The Forge';
  const today = new Date().toISOString().split('T')[0];

  // Create session record
  try {
    const sessRes = await fetch(`${SB_URL}/rest/v1/session_logs`, {
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':`Bearer ${SB_KEY}`,'Prefer':'return=representation'},
      body: JSON.stringify({
        email, session_date:today, week_number:parseInt(week),
        phase, session_name:sessionName,
        session_day:SESSION_DAYS[sessionName]||'', completed:true
      })
    });
    const sessData = await sessRes.json();
    const sessionId = sessData[0]?.id;

    // Save all sets
    const allSets = [];
    Object.entries(setData).forEach(([exName, sets]) => {
      const ex = Object.values(SESSION_EXERCISES).flat().find(e=>e.name===exName);
      sets.forEach((s,i) => {
        if (!s.weight && !s.reps) return; // skip empty
        const prev = prevBests[exName];
        const isPB = s.weight && prev?.weight && parseFloat(s.weight) > parseFloat(prev.weight);
        allSets.push({
          session_id:  sessionId,
          email,
          week_number: parseInt(week),
          exercise_name: exName,
          station:       ex?.station || '',
          set_number:    i+1,
          reps_target:   parseInt(ex?.repsTarget)||null,
          reps_actual:   parseInt(s.reps)||null,
          weight_kg:     parseFloat(s.weight)||null,
          rpe:           parseInt(s.rpe)||null,
          pb:            isPB,
        });
      });
    });

    if (allSets.length) {
      await fetch(`${SB_URL}/rest/v1/set_logs`, {
        method:'POST',
        headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':`Bearer ${SB_KEY}`,'Prefer':'return=minimal'},
        body: JSON.stringify(allSets)
      });
    }

    // Show toast
    const toast = document.getElementById('log-toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);

    // Refresh prev bests
    await loadPrevBests(email);

  } catch(e) {
    alert('Error saving session. Check your connection.');
    console.error(e);
  }
}

// ── FITNESS TESTING — pull from leaderboard_entries ───────────────────────
async function loadFitnessHistory(email) {
  try {
    const entries = await sbGet(
      `leaderboard_entries?email=eq.${encodeURIComponent(email)}&order=created_at.asc&select=*`
    );
    renderFitnessHistory(entries);
  } catch(e) { console.log('Fitness history error:', e); }
}

function fmtTime(s){
  if(!s)return'—';
  const m=Math.floor(s/60),sec=Math.round(s%60);
  return `${m}:${sec.toString().padStart(2,'0')}`;
}

function tierFor(secs, sex) {
  const bands = sex==='female'
    ? [[900,'Spartan Queen'],[1200,'Elite Warrior'],[1500,'Battle Ready'],[1800,'Warrior'],[2400,'Recruit'],[99999,'In Training']]
    : [[900,'Spartan King'],[1200,'Elite Warrior'],[1500,'Battle Ready'],[1800,'Warrior'],[2400,'Recruit'],[99999,'In Training']];
  return (bands.find(b=>secs<=b[0])||bands[bands.length-1])[1];
}

function tierColor(tier) {
  const colors = {'Spartan King':'var(--gold)','Spartan Queen':'var(--gold)','Elite Warrior':'#E06030','Battle Ready':'var(--crimson)','Warrior':'#8070B0','Recruit':'var(--muted)','In Training':'#555'};
  return colors[tier]||'var(--ash)';
}

function renderFitnessHistory(entries) {
  const t300El = document.getElementById('test300-history');
  const strEl  = document.getElementById('strength-history');

  if (!entries.length) {
    t300El.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:10px 0">No fitness tests recorded yet. Complete the Spartan Power Metrics test to see your history here.</div>';
    strEl.innerHTML = '';
    return;
  }

  const sex = currentUser.sex || 'male';

  // 300 Test entries with times
  const t300Entries = entries.filter(e => e.test300_secs);

  if (t300Entries.length >= 2) {
    const first = t300Entries[0];
    const last  = t300Entries[t300Entries.length-1];
    const improvement = first.test300_secs - last.test300_secs;
    const firstTier = tierFor(first.test300_secs, sex);
    const lastTier  = tierFor(last.test300_secs, sex);

    t300El.innerHTML = `
      <div class="prog-comparison">
        <div class="pc-side">
          <div class="pc-label">Week 1</div>
          <div class="pc-val">${fmtTime(first.test300_secs)}</div>
          <div class="pc-tier" style="color:${tierColor(firstTier)}">${firstTier}</div>
        </div>
        <div class="pc-arrow">→</div>
        <div class="pc-side">
          <div class="pc-label">Latest</div>
          <div class="pc-val" style="color:var(--greenl)">${fmtTime(last.test300_secs)}</div>
          <div class="pc-tier" style="color:${tierColor(lastTier)}">${lastTier}</div>
        </div>
      </div>
      ${improvement > 0 ? `<div class="improvement">▲ ${Math.floor(improvement/60)}m ${Math.round(improvement%60)}s faster than Week 1</div>` : ''}
      <div style="margin-top:10px">
        ${t300Entries.map((e,i) => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(42,42,42,.4);font-size:13px">
            <div style="color:var(--al)">Test ${i+1} · ${e.submitted_at||''}</div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:${tierColor(tierFor(e.test300_secs,sex))}">${fmtTime(e.test300_secs)}</span>
              <span class="tier-pill" style="border:1px solid ${tierColor(tierFor(e.test300_secs,sex))};color:${tierColor(tierFor(e.test300_secs,sex))};font-size:9px;padding:1px 7px;border-radius:10px;font-family:'Barlow Condensed',sans-serif;letter-spacing:1px">${tierFor(e.test300_secs,sex)}</span>
            </div>
          </div>`).join('')}
      </div>`;
  } else if (t300Entries.length === 1) {
    const e = t300Entries[0];
    const tier = tierFor(e.test300_secs, sex);
    t300El.innerHTML = `
      <div class="tier-strip">
        <div>
          <div class="ts-tier-name" style="color:${tierColor(tier)}">${tier}</div>
          <div class="ts-tier-time">${fmtTime(e.test300_secs)}</div>
        </div>
        <div style="font-size:11px;color:var(--ash)">Baseline · Week 1</div>
      </div>
      <div style="font-size:12px;color:var(--ash)">Complete your next 300 Test to see your progress.</div>`;
  } else {
    t300El.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:10px 0">No 300 Test results yet.</div>';
  }

  // Strength history
  const lifts = [
    {key:'squat_1rm',    label:'Squat'},
    {key:'deadlift_1rm', label:'Deadlift'},
    {key:'bench_1rm',    label:'Bench Press'},
    {key:'ohp_1rm',      label:'OHP'},
  ];

  const strengthEntries = entries.filter(e =>
    e.squat_1rm || e.deadlift_1rm || e.bench_1rm || e.ohp_1rm
  );

  if (!strengthEntries.length) {
    strEl.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:10px 0">No strength test data yet.</div>';
    return;
  }

  strEl.innerHTML = lifts.map(lift => {
    const vals = strengthEntries.map(e => e[lift.key]).filter(v => v);
    if (!vals.length) return '';
    const first = vals[0];
    const best  = Math.max(...vals);
    const gain  = best - first;
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid rgba(42,42,42,.4)">
        <div>
          <div style="font-size:13px;font-weight:500;color:var(--ow)">${lift.label}</div>
          <div style="font-size:11px;color:var(--ash)">Start: ${first}kg</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gl)">${best}kg</div>
          ${gain > 0 ? `<div style="font-size:11px;color:var(--greenl)">▲ +${gain.toFixed(1)}kg</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

// Extend clientNav to load fitness data when progress tab opens
const _origClientNav = clientNav;
function clientNav(screen, tab) {
  _origClientNav(screen, tab);
  if (screen === 'logset') loadSessionLog();
  if (screen === 'progress') {
    loadFitnessHistory(currentUser.email);
  }
}

// ── SESSION LOGGING ──────────────────────────────────────────────────────────
let currentSessionData = null;
let sessionLogState    = {}; // {exerciseName: [{weight, reps, done}]}

async function loadLogScreen() {
  const user   = currentUser;
  const email  = user.email;
  const [userRec, latestCI] = await Promise.all([
    sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=*`),
    sbGet(`checkin_submissions?email=eq.${encodeURIComponent(email)}&order=submitted_at.desc&limit=1&select=cycle_phase`),
  ]);
  const u      = userRec[0] || {};
  // Pull latest cycle phase into currentUser for hormonal cue
  if (latestCI.length && latestCI[0].cycle_phase) {
    currentUser.cycle_phase = latestCI[0].cycle_phase;
  }
  const week   = u.current_week || 1;
  const phase  = u.current_phase || 'The Forge';

  const todayIdx = new Date().getDay();
  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today    = dayNames[todayIdx];
  const sessions = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const sessMeta = {
    Monday:    {name:'Phalanx',    icon:'🏋️'},
    Tuesday:   {name:'The Hunt',   icon:'🏃'},
    Wednesday: {name:'The Spear',  icon:'⚔️'},
    Thursday:  {name:'Krypteia',   icon:'🔥'},
    Friday:    {name:'Agoge',      icon:'⚡'},
    Saturday:  {name:'Lakedaimon', icon:'🛡️'},
  };

  const sub = document.getElementById('log-session-sub');

  if (todayIdx === 0) {
    renderPresessionCheckin('Rest', true);
    document.getElementById('session-log-content').innerHTML =
      '<div class="empty"><div class="empty-icon">😴</div><div class="empty-text">Sunday is rest day. No session to log.</div></div>';
    document.getElementById('session-log-content').style.display = 'block';
    sub.textContent = 'Rest day';
    return;
  }

  // Check if check-in gate is active
  renderSessionGate(week);

  // Show pre-session check-in first, hide log until done
  renderPresessionCheckin(sess.name, false);

  const sess = sessMeta[today];
  if (!sess) return;

  sub.textContent = `${today} · Week ${week} · ${phase}`;
  currentSessionData = { day: today, sessionName: sess.name, week, phase, email };

  // Pull last week's logs for this session
  const prevLogs = await sbGet(
    `session_logs?email=eq.${encodeURIComponent(email)}&session_name=eq.${encodeURIComponent(sess.name)}&order=created_at.desc&limit=50&select=*`
  );

  const prevByEx = {};
  prevLogs.forEach(l => {
    if (!prevByEx[l.exercise_name]) prevByEx[l.exercise_name] = [];
    prevByEx[l.exercise_name].push(l);
  });

  // Get exercises for today's session
  const exercises = getSessionExercises(sess.name, week, phase);
  const isTestWeek = [1,8,15].includes(week);
  sessionLogState = {};
  window.exNameMap = window.exNameMap || {};

  const el = document.getElementById('session-log-content');
  el.innerHTML = `
    <div class="log-session-head">
      <div class="lsh-name">${sess.icon} ${sess.name}</div>
      <div class="lsh-meta">Week ${week} · ${phase} · ${today}</div>
    </div>
    ${exercises.map(ex => {
      sessionLogState[ex.name] = Array.from({length: ex.sets}, () => ({weight:'', reps:'', done:false}));
      window.exNameMap[ex.safeName] = ex.name;
      const prev = prevByEx[ex.name];
      const prevStr = prev && prev.length ?
        `Last: ${prev[0].weight_kg}kg × ${prev[0].reps_actual} reps (Wk ${prev[0].week_number})` : 'No previous data';
      return `
        <div class="exercise-log" id="exlog-${ex.safeName}">
          <div class="el-head" onclick="toggleExercise('${ex.safeName}')">
            <div>
              <div class="el-name">${ex.name}</div>
              <div class="el-target">${ex.sets} sets × ${ex.reps} reps · ${ex.load}</div>
            </div>
            <div style="color:var(--al);font-size:18px" id="ex-chevron-${ex.safeName}">▾</div>
          </div>
          <div class="el-body" id="ex-body-${ex.safeName}">
            <div style="display:grid;grid-template-columns:32px 1fr 1fr 1fr 36px;gap:6px;margin-bottom:6px">
              <div></div>
              <div class="set-label">Weight kg</div>
              <div class="set-label">Reps</div>
              <div class="set-label">RPE</div>
              <div></div>
            </div>
            ${Array.from({length:ex.sets},(_,i) => `
              <div class="set-row">
                <div class="set-num">${i+1}</div>
                <div class="set-col">
                  <input type="number" class="set-input" id="w-${ex.safeName}-${i}"
                    placeholder="${ex.targetKg||'—'}" min="0" max="500" step="0.5"
                    oninput="updateSet('${ex.safeName}',${i},'weight',this.value)">
                </div>
                <div class="set-col">
                  <input type="number" class="set-input" id="r-${ex.safeName}-${i}"
                    placeholder="${ex.reps}" min="0" max="100"
                    oninput="updateSet('${ex.safeName}',${i},'reps',this.value)">
                </div>
                <div class="set-col">
                  <input type="number" class="set-input" id="rpe-${ex.safeName}-${i}"
                    placeholder="7" min="1" max="10"
                    oninput="updateSet('${ex.safeName}',${i},'rpe',this.value)">
                </div>
                <button class="set-check" id="chk-${ex.safeName}-${i}"
                  onclick="checkSet('${ex.safeName}',${i})">○</button>
              </div>`).join('')}
          </div>
          <div class="el-prev" id="prev-${ex.safeName}">${prevStr}</div>
          ${isFormCheckExercise(ex.name) ? `
          <button class="form-check-btn" id="fc-btn-${ex.safeName}"
            onclick="toggleFormCheck('${ex.safeName}')">
            📹 Check My Form
          </button>
          <div class="form-check-wrap" id="fc-wrap-${ex.safeName}">
            <div class="fc-upload-area" onclick="triggerVideoUpload('${ex.safeName}')">
              <div class="fc-upload-icon">🎥</div>
              <div class="fc-upload-text">Tap to film or upload a rep</div>
              <div class="fc-upload-hint">5–10 seconds · side or front angle works best</div>
              <input type="file" id="fc-file-${ex.safeName}" accept="video/*,image/*"
                capture="environment" style="display:none"
                onchange="handleFormCheckMedia('${ex.safeName}',this)">
            </div>
            <div class="fc-preview" id="fc-preview-${ex.safeName}" style="display:none">
              <video id="fc-video-${ex.safeName}" controls playsinline muted style="width:100%;border-radius:6px;max-height:260px"></video>
            </div>
            <button class="fc-analyse-btn" id="fc-analyse-${ex.safeName}"
              style="display:none"
              onclick="analyseForm('${ex.safeName}')">
              ⚡ Analyse My Form
            </button>
            <div class="fc-loading" id="fc-loading-${ex.safeName}" style="display:none">
              <div class="mp-spin"></div>
              <div class="fc-loading-text">Analysing your form…</div>
            </div>
            <div class="fc-result" id="fc-result-${ex.safeName}" style="display:none"></div>
          </div>` : ''}
        </div>`;
    }).join('')}
    <button class="btn-save-session" id="btn-save-sess" onclick="saveSession()">
      ✓ Save Session
    </button>
    <div style="font-size:11px;color:var(--ash);text-align:center;margin-top:8px">
      Only completed sets (ticked) are saved
    </div>`;

  // Add hormonal/recovery cue and tomorrow preview below the log
  renderHormonalCue(currentUser, week, sess.name);
  renderTomorrowPreview(sessMeta, todayIdx, week, phase);

  setTimeout(showFormCheckButtons, 100);
}

// ── PRE-COHORT BANNER ────────────────────────────────────────────────────────
function renderPreCohortBanner(week) {
  const { cohort } = getActiveCohort();
  const el = document.getElementById('ci-sunday-prompt');
  if (!el) return;
  const days = Math.max(0, Math.ceil((cohort.start - new Date()) / (1000*60*60*24)));
  el.innerHTML =
    '<div class="ci-prompt-banner" style="border-color:rgba(201,168,76,.3)">' +
      '<div class="ci-prompt-eye">Programme starts in ' + days + ' days</div>' +
      '<div class="ci-prompt-title">You are registered for ' + cohort.name + '</div>' +
      '<div class="ci-prompt-sub">Sessions unlock on ' + cohort.start.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}) + '. Explore the app and set up your nutrition targets while you wait.</div>' +
    '</div>';
}

// ── WOMEN'S CYCLE HOME CARD ──────────────────────────────────────────────────

const CI_TOTAL_PHASES = 7; // 8th is generation screen
let ciPhase = 1;
let ciData  = {};
let ciPhotoFront = null;
let ciPhotoSide  = null;
let ciPhotoBack  = null;
let ciPostureResult = null;

// Score definitions
const CI_SCORES = [
  { key:'overall_score',   label:'Overall week',     sub:'How was this week overall?' },
  { key:'training_score',  label:'Training',          sub:'Quality and consistency of sessions' },
  { key:'nutrition_score', label:'Nutrition',         sub:'How well did you hit your targets?' },
  { key:'mindset_score',   label:'Mindset',           sub:'Mental state, motivation and focus' },
  { key:'energy_score',    label:'Energy',            sub:'Energy levels across the week' },
];

function openCheckin() {
  ciPhase = 1;
  ciData  = {};
  ciPhotoFront = null;
  ciPhotoSide  = null;
  ciPhotoBack  = null;
  ciPostureResult = null;

  // Reset all fields
  document.querySelectorAll('.ci-phase').forEach(p => p.classList.remove('active'));
  document.getElementById('cip1')?.classList.add('active');
  document.getElementById('ci-back-btn').style.display = 'none';
  document.getElementById('ci-next-btn').textContent = 'Continue →';

  // Show female-specific fields if applicable
  const isFemale = currentUser?.sex === 'female';
  const cycleChips = document.getElementById('ci-cycle-chips');
  const cycleNA    = document.getElementById('ci-cycle-na');
  if (cycleChips) cycleChips.style.display = isFemale ? 'block' : 'none';
  if (cycleNA)    cycleNA.style.display    = isFemale ? 'none' : 'block';

  // Render score sliders
  renderCiScores();
  updateCiProgress();

  document.getElementById('checkin-overlay').style.display = 'block';
  document.getElementById('checkin-overlay').scrollTop = 0;
}

function closeCheckin() {
  document.getElementById('checkin-overlay').style.display = 'none';
}

function renderCiScores() {
  const el = document.getElementById('ci-scores-list');
  if (!el) return;
  el.innerHTML = CI_SCORES.map(s => `
    <div class="ci-score-row">
      <div>
        <div class="ci-score-label">${s.label}</div>
        <div class="ci-score-sub">${s.sub}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="ci-score-val" id="ci-score-val-${s.key}">${ciData[s.key] || 7}</div>
        <div class="ci-score-btns">
          <button class="ci-score-btn" onclick="adjustScore('${s.key}',-1)">−</button>
          <button class="ci-score-btn" onclick="adjustScore('${s.key}',+1)">+</button>
        </div>
      </div>
    </div>`).join('');

  CI_SCORES.forEach(s => { if (!ciData[s.key]) ciData[s.key] = 7; });
}

function adjustScore(key, delta) {
  ciData[key] = Math.max(1, Math.min(10, (ciData[key] || 7) + delta));
  const el = document.getElementById('ci-score-val-' + key);
  if (el) {
    el.textContent = ciData[key];
    el.style.color = ciData[key] >= 7 ? 'var(--greenl)' : ciData[key] >= 4 ? 'var(--gold)' : '#E24B4A';
  }
}

function ciChip(el, key, val) {
  el.closest('div').querySelectorAll('.ci-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  ciData[key] = val;
}

function ciRadio(el, key, val) {
  el.closest('.ci-phase').querySelectorAll('.ci-radio-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  ciData[key] = val;
}

function updateCiProgress() {
  const pct = Math.round((ciPhase / (CI_TOTAL_PHASES + 1)) * 100);
  const fill = document.getElementById('ci-progress-fill');
  const sub  = document.getElementById('ci-head-sub');
  if (fill) fill.style.width = pct + '%';
  const labels = ['','Your scores','Sleep and recovery','Training review','Nutrition','Measurements','Progress and posture photos','Mindset and motivation','Generating your plan'];
  if (sub) sub.textContent = 'Phase ' + ciPhase + ' of ' + CI_TOTAL_PHASES + ' — ' + (labels[ciPhase] || '');
}

function ciNext() {
  // Validate current phase
  if (ciPhase === 1) {
    // Scores always have defaults — no validation needed
  }
  if (ciPhase === 5) {
    if (!document.getElementById('ci-weight')?.value) {
      showToast('Please enter your current weight.');
      return;
    }
    ciData.weight = parseFloat(document.getElementById('ci-weight').value);
  }

  // Collect data from current phase
  collectCiPhaseData();

  if (ciPhase >= CI_TOTAL_PHASES) {
    // Submit
    submitCheckin();
    return;
  }

  document.getElementById('cip' + ciPhase)?.classList.remove('active');
  ciPhase++;
  document.getElementById('cip' + ciPhase)?.classList.add('active');
  document.getElementById('ci-back-btn').style.display = ciPhase > 1 ? 'block' : 'none';
  document.getElementById('ci-next-btn').textContent = ciPhase === CI_TOTAL_PHASES ? 'Submit Check-In →' : 'Continue →';
  updateCiProgress();
  document.getElementById('checkin-overlay').scrollTop = 0;
}

function ciBack() {
  if (ciPhase <= 1) return;
  document.getElementById('cip' + ciPhase)?.classList.remove('active');
  ciPhase--;
  document.getElementById('cip' + ciPhase)?.classList.add('active');
  document.getElementById('ci-back-btn').style.display = ciPhase > 1 ? 'block' : 'none';
  document.getElementById('ci-next-btn').textContent = 'Continue →';
  updateCiProgress();
  document.getElementById('checkin-overlay').scrollTop = 0;
}

function collectCiPhaseData() {
  // Phase 2
  ciData.sleep_hours   = parseFloat(document.getElementById('ci-sleep-hrs')?.value) || null;
  ciData.stress_level  = parseInt(document.getElementById('ci-stress')?.value) || 5;
  ciData.recovery_notes = document.getElementById('ci-recovery-notes')?.value || '';
  // Phase 3
  ciData.best_session  = document.getElementById('ci-best-session')?.value || '';
  ciData.hardest       = document.getElementById('ci-hardest')?.value || '';
  // Phase 4
  ciData.nut_challenge = document.getElementById('ci-nut-challenge')?.value || '';
  // Phase 5
  const measFields = ['chest','waist','hips','larm','rarm','lthigh','rthigh','neck'];
  measFields.forEach(f => {
    const val = parseFloat(document.getElementById('ci-m-' + f)?.value);
    if (val) ciData['m_' + f] = val;
  });
  // Phase 7
  ciData.win       = document.getElementById('ci-win')?.value || '';
  ciData.improve   = document.getElementById('ci-improve')?.value || '';
  ciData.notes     = document.getElementById('ci-notes')?.value || '';
  ciData.nutrition_consistency = parseInt(document.getElementById('ci-nutrition-score')?.value) || 7;
}

// ── PHOTOS ────────────────────────────────────────────────────────────────────
function triggerCiPhoto(side) {
  document.getElementById('ci-' + side + '-input')?.click();
}

function handleCiPhoto(side, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const b64 = e.target.result.split(',')[1];
    if (side === 'front')      ciPhotoFront = { b64, mime: file.type, file };
    else if (side === 'side')  ciPhotoSide  = { b64, mime: file.type, file };
    else if (side === 'back')  ciPhotoBack  = { b64, mime: file.type, file };

    const img = document.getElementById('ci-' + side + '-img');
    const box = document.getElementById('ci-' + side + '-box');
    const clr = document.getElementById('ci-' + side + '-clear');
    if (img) { img.src = e.target.result; img.style.display = 'block'; }
    if (box) { box.querySelector('.ci-photo-icon').style.display = 'none';
               box.querySelector('.ci-photo-label').style.display = 'none';
               box.querySelector('.ci-photo-hint').style.display = 'none'; }
    if (clr) clr.style.display = 'flex';

    // Show Mike review message when any photo is added
    const statusEl = document.getElementById('ci-photos-status');
    if (statusEl) statusEl.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function clearCiPhoto(e, side) {
  e.stopPropagation();
  if (side === 'front')      ciPhotoFront = null;
  else if (side === 'side')  ciPhotoSide  = null;
  else if (side === 'back')  ciPhotoBack  = null;

  const img = document.getElementById('ci-' + side + '-img');
  const box = document.getElementById('ci-' + side + '-box');
  const clr = document.getElementById('ci-' + side + '-clear');
  const inp = document.getElementById('ci-' + side + '-input');
  if (img) { img.src = ''; img.style.display = 'none'; }
  if (box) { box.querySelector('.ci-photo-icon').style.display = '';
             box.querySelector('.ci-photo-label').style.display = '';
             box.querySelector('.ci-photo-hint').style.display = ''; }
  if (clr) clr.style.display = 'none';
  if (inp) inp.value = '';

  // Hide status if no photos remain
  if (!ciPhotoFront && !ciPhotoSide && !ciPhotoBack) {
    const statusEl = document.getElementById('ci-photos-status');
    if (statusEl) statusEl.style.display = 'none';
  }
}

// ── POSTURE ANALYSIS ──────────────────────────────────────────────────────────
async function analysePosture() {
  const btn = document.getElementById('ci-posture-btn');
  const loadingEl = document.getElementById('ci-posture-loading');
  const resultEl  = document.getElementById('ci-posture-result');
  if (btn) btn.disabled = true;
  if (loadingEl) loadingEl.style.display = 'block';
  if (resultEl)  resultEl.style.display  = 'none';

  const images = [];
  if (ciPhotoFront) images.push({ type:'image', source:{ type:'base64', media_type: ciPhotoFront.mime, data: ciPhotoFront.b64 }});
  if (ciPhotoSide)  images.push({ type:'image', source:{ type:'base64', media_type: ciPhotoSide.mime,  data: ciPhotoSide.b64  }});

  const prompt = `You are Mike Foster, Level 3 Personal Trainer specialising in posture and movement. Analyse the posture in these photos.

Assess from the front photo: head tilt, shoulder height symmetry, hip alignment, knee alignment.
Assess from the side photo: forward head posture, thoracic kyphosis, lumbar lordosis, pelvic tilt, knee position.

Respond in JSON only:
{
  "summary": "one sentence overall posture assessment in Mike voice",
  "findings": [
    {"icon": "✅ or ⚠️ or ❌", "area": "area name", "finding": "specific plain English observation"},
    {"icon": "...", "area": "...", "finding": "..."}
  ],
  "correctives": [
    {"exercise": "exercise name", "detail": "sets/reps and brief cue", "why": "why this addresses a finding"},
    {"exercise": "...", "detail": "...", "why": "..."},
    {"exercise": "...", "detail": "...", "why": "..."}
  ]
}

Give 4-6 findings and exactly 3 corrective exercises targeted at the most significant issues.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': window.MFF_API_KEY || '',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 800,
        messages: [{ role:'user', content: [...images, { type:'text', text: prompt }] }]
      })
    });

    const d = await res.json();
    if (d.error) throw new Error(d.error.message);
    const text = d.content.map(i => i.text||'').join('').replace(/```json|```/g,'').trim();
    const result = JSON.parse(text);
    ciPostureResult = result;
    renderPostureResult(result, resultEl);

  } catch(err) {
    if (resultEl) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = '<div style="font-size:12px;color:#E24B4A">Analysis failed. You can still submit your check-in — just continue without posture analysis.</div>';
    }
    console.error('Posture analysis error:', err);
  }

  if (loadingEl) loadingEl.style.display = 'none';
  if (btn) btn.disabled = false;
}

function renderPostureResult(result, el) {
  if (!el) return;
  el.style.display = 'block';
  el.innerHTML =
    '<div class="ci-posture-result-title">Posture Analysis</div>' +
    '<div style="font-size:13px;color:var(--al);margin-bottom:12px;font-style:italic">' + result.summary + '</div>' +
    result.findings.map(f =>
      '<div class="ci-posture-bullet"><div class="ci-posture-bullet-icon">' + f.icon + '</div><div><strong style="color:#fff">' + f.area + '</strong> — ' + f.finding + '</div></div>'
    ).join('') +
    '<div style="font-family:Bebas Neue,sans-serif;font-size:14px;letter-spacing:.5px;color:var(--gold);margin:12px 0 8px">Corrective Work</div>' +
    result.correctives.map(ex =>
      '<div class="ci-posture-bullet"><div class="ci-posture-bullet-icon">🎯</div><div><strong style="color:#fff">' + ex.exercise + '</strong> — ' + ex.detail + '<div style="font-size:11px;color:var(--ash);margin-top:2px">' + ex.why + '</div></div></div>'
    ).join('');
}

// ── SUBMIT CHECK-IN ───────────────────────────────────────────────────────────
async function submitCheckin() {
  // Move to generation phase
  document.getElementById('cip' + ciPhase)?.classList.remove('active');
  ciPhase = 8;
  document.getElementById('cip8')?.classList.add('active');
  document.getElementById('ci-nav').style.display = 'none';
  updateCiProgress();

  const email   = currentUser?.email;
  const week    = currentUser?.current_week || 1;
  const name    = currentUser?.first_name || 'Spartan';

  // Upload photos to Supabase Storage
  let frontUrl = null, sideUrl = null;
  if (ciPhotoFront?.file) {
    try {
      const path = 'progress-photos/' + email + '/wk' + week + '-front.' + (ciPhotoFront.mime.split('/')[1] || 'jpg');
      const res = await fetch(SB_URL + '/storage/v1/object/spartan16/' + path, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': ciPhotoFront.mime },
        body: ciPhotoFront.file
      });
      if (res.ok) frontUrl = SB_URL + '/storage/v1/object/public/spartan16/' + path;
    } catch(e) { console.warn('Front photo upload failed:', e); }
  }
  if (ciPhotoSide?.file) {
    try {
      const path = 'progress-photos/' + email + '/wk' + week + '-side.' + (ciPhotoSide.mime.split('/')[1] || 'jpg');
      const res = await fetch(SB_URL + '/storage/v1/object/spartan16/' + path, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': ciPhotoSide.mime },
        body: ciPhotoSide.file
      });
      if (res.ok) sideUrl = SB_URL + '/storage/v1/object/public/spartan16/' + path;
    } catch(e) { console.warn('Side photo upload failed:', e); }
  }
  let backUrl = null;
  if (ciPhotoBack?.file) {
    try {
      const path = 'progress-photos/' + email + '/wk' + week + '-back.' + (ciPhotoBack.mime.split('/')[1] || 'jpg');
      const res = await fetch(SB_URL + '/storage/v1/object/spartan16/' + path, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': ciPhotoBack.mime },
        body: ciPhotoBack.file
      });
      if (res.ok) backUrl = SB_URL + '/storage/v1/object/public/spartan16/' + path;
    } catch(e) { console.warn('Back photo upload failed:', e); }
  }

  // Generate AI coaching plan
  let aiPlan = '';
  try {
    const planPrompt = `You are Mike Foster, personal trainer and coach at Mike Foster Fitness. Write a short personalised coaching summary for ${name} based on their Week ${week} check-in.

The training sessions for the week are already set in the programme. Do NOT generate a training plan. Instead write 3-4 short paragraphs that: acknowledge what they told you, note anything concerning that needs addressing, give one or two specific focus points for the week (nutrition, sleep, mindset or recovery — not training), and end with a direct motivating line in Mike's voice.

Keep it personal, direct and human. Reference what they actually said in their check-in.

Check-in summary:
- Overall score: ${ciData.overall_score}/10
- Training score: ${ciData.training_score}/10
- Nutrition score: ${ciData.nutrition_score}/10
- Mindset score: ${ciData.mindset_score}/10
- Energy score: ${ciData.energy_score}/10
- Sleep: ${ciData.sleep_hours || 'not recorded'} hours, quality: ${ciData.sleep_quality || 'not recorded'}
- Stress: ${ciData.stress_level}/10
- Sessions completed: ${ciData.sessions_done || 'not recorded'}
- Protein hit: ${ciData.protein_hit || 'not recorded'}
- Alcohol: ${ciData.alcohol || 'not recorded'}
- Motivation: ${ciData.motivation || 'not recorded'}
- Win: ${ciData.win || 'none recorded'}
- Improve: ${ciData.improve || 'none recorded'}
- Notes: ${ciData.notes || 'none'}
${ciPostureResult ? '- Posture findings: ' + ciPostureResult.findings.map(f => f.area + ': ' + f.finding).join(', ') : ''}

Write a direct, personalised coaching plan for next week in Mike Foster voice. 3-4 short paragraphs. Acknowledge what they told you. Address any flags. Give specific focus areas. No generic advice.`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': window.MFF_API_KEY || '',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        messages: [{ role:'user', content: planPrompt }]
      })
    });
    const d = await res.json();
    aiPlan = d.content?.map(i => i.text||'').join('') || '';
  } catch(e) { console.warn('AI plan generation failed:', e); }

  // Save to Supabase
  const row = {
    email,
    submitted_at:     new Date().toISOString(),
    week_number:      week,
    overall_score:    ciData.overall_score,
    training_score:   ciData.training_score,
    nutrition_score:  ciData.nutrition_score,
    mindset_score:    ciData.mindset_score,
    energy_score:     ciData.energy_score,
    sleep_hours:      ciData.sleep_hours,
    sleep_quality:    ciData.sleep_quality,
    stress_level:     ciData.stress_level,
    sessions_done:    ciData.sessions_done,
    protein_hit:      ciData.protein_hit,
    alcohol:          ciData.alcohol,
    motivation:       ciData.motivation,
    cycle_phase:      ciData.cycle_phase || null,
    weight_kg:        ciData.weight || null,
    chest_cm:         ciData.m_chest || null,
    waist_cm:         ciData.m_waist || null,
    hips_cm:          ciData.m_hips || null,
    left_arm_cm:      ciData.m_larm || null,
    right_arm_cm:     ciData.m_rarm || null,
    left_thigh_cm:    ciData.m_lthigh || null,
    right_thigh_cm:   ciData.m_rthigh || null,
    neck_cm:          ciData.m_neck || null,
    front_photo_url:  frontUrl,
    side_photo_url:   sideUrl,
    back_photo_url:   backUrl,
    posture_analysis: null, // Sent to Mike for review — not stored as client-visible data
    win:              ciData.win,
    improve:          ciData.improve,
    notes:            ciData.notes,
    best_session:     ciData.best_session,
    hardest:          ciData.hardest,
    recovery_notes:   ciData.recovery_notes,
    nutrition_notes:  ciData.nut_challenge,
    nutrition_consistency: ciData.nutrition_consistency,
    ai_coaching_plan: aiPlan,
  };

  try {
    await fetch(SB_URL + '/rest/v1/checkin_submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    });
  } catch(e) { console.warn('Supabase save failed:', e); }

  // Mark checked in this week in localStorage
  const today = new Date().toISOString().split('T')[0];
  localStorage.setItem('ci_done_week_' + week + '_' + email, today);

  // Fire GHL webhook
  fetch('https://services.leadconnectorhq.com/hooks/joReyyNlTbY9adnjCSpY/webhook-trigger/fc04e247-953c-4842-a223-77c32f571441', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...row, type: 'weekly_checkin', full_name: name })
  }).catch(() => {});

  // Send email to Mike
  const emailBody = encodeURIComponent(
    'Week ' + week + ' check-in from ' + (currentUser ? currentUser.first_name || '' : '') + ' ' + (currentUser ? currentUser.last_name || '' : '') +
    '\n\nOverall: ' + ciData.overall_score + '/10' +
    '\nTraining: ' + ciData.training_score + '/10' +
    '\nNutrition: ' + ciData.nutrition_score + '/10' +
    '\nMindset: ' + ciData.mindset_score + '/10' +
    '\nEnergy: ' + ciData.energy_score + '/10' +
    '\n\nWeight: ' + (ciData.weight || 'not recorded') + 'kg' +
    '\nWin: ' + (ciData.win || 'none') +
    '\nNotes: ' + (ciData.notes || 'none') +
    '\n\nView full submission in Supabase dashboard.'
  );
  // Add posture and photos to Mike email
  const postureSection = postureForMike ? '\n\nPOSTURE ANALYSIS:\n' + postureForMike : '\n\nNo posture photos this week.';
  const photoLinks = [frontUrl, sideUrl, backUrl].filter(Boolean);
  const photoSection = photoLinks.length ? '\n\nPROGRESS PHOTOS:\n' + photoLinks.join('\n') : '';
  const fullBody = encodeURIComponent(decodeURIComponent(emailBody) + postureSection + photoSection);
  const firstName = currentUser ? (currentUser.first_name || '') : email;
  window.open('mailto:mike@mikefosterfitness.co.uk?subject=' + encodeURIComponent('Week ' + week + ' Check-In: ' + firstName) + '&body=' + fullBody, '_blank');

  // Show the coaching plan
  // Run posture analysis server-side if photos present — results go to Mike only
  let postureForMike = '';
  if (ciPhotoFront || ciPhotoSide || ciPhotoBack) {
    try {
      const postureImages = [];
      if (ciPhotoFront) postureImages.push({ type:'image', source:{ type:'base64', media_type:ciPhotoFront.mime, data:ciPhotoFront.b64 }});
      if (ciPhotoSide)  postureImages.push({ type:'image', source:{ type:'base64', media_type:ciPhotoSide.mime,  data:ciPhotoSide.b64  }});
      if (ciPhotoBack)  postureImages.push({ type:'image', source:{ type:'base64', media_type:ciPhotoBack.mime,  data:ciPhotoBack.b64  }});

      const pRes = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'x-api-key': window.MFF_API_KEY || '', 'anthropic-version':'2023-06-01', 'anthropic-dangerous-direct-browser-access':'true' },
        body: JSON.stringify({
          model:'claude-sonnet-4-6', max_tokens:600,
          messages:[{ role:'user', content:[
            ...postureImages,
            { type:'text', text:'You are a Level 3 personal trainer assessing posture. Analyse these ' + postureImages.length + ' progress photos (front, side and/or back). Assess: forward head posture, shoulder symmetry, thoracic kyphosis, lumbar lordosis, pelvic tilt, hip symmetry, knee alignment, scapular winging. List your findings clearly and give 3 specific corrective exercises with sets, reps and coaching cues. Be clinical and specific — this is for the coach to review, not the client.' }
          ]}]
        })
      });
      const pData = await pRes.json();
      postureForMike = pData.content?.map(i => i.text||'').join('') || '';
    } catch(e) { console.warn('Posture analysis failed:', e); }
  }

  const statusEl = document.getElementById('ci-gen-status');
  const planEl   = document.getElementById('ci-final-plan');
  if (statusEl) statusEl.textContent = 'Done. Your Week ' + (week+1) + ' coaching summary is ready.';
  if (planEl && aiPlan) {
    planEl.style.display = 'block';
    planEl.innerHTML =
      '<div class="ci-posture-result-title">Your Coaching Summary — Week ' + (week+1) + '</div>' +
      '<div style="font-size:13px;color:var(--al);line-height:1.9">' + aiPlan.split('\n\n').join('</p><p>').split('\n').join('<br>') + '</div>';
  }

  // Close button
  const nav = document.getElementById('ci-nav');
  if (nav) {
    nav.style.display = 'flex';
    nav.innerHTML = '<button class="ci-btn-next" onclick="finishCheckin()">Enter the App →</button>';
  }

  // Milestone check
  checkCheckinMilestones(1, ciData.overall_score, null, week);
}

function finishCheckin() {
  closeCheckin();
  // Update coaching plan card on home
  loadCoachingPlanCard(currentUser?.email, currentUser?.current_week || 1);
  // Unlock sessions
  const lockedWrap = document.getElementById('ci-locked-wrap');
  if (lockedWrap) lockedWrap.innerHTML = '';
}

// ── SUNDAY PROMPT AND SESSION GATE ───────────────────────────────────────────
function checkCheckinStatus(week) {
  const email = currentUser?.email;
  const doneKey = 'ci_done_week_' + week + '_' + email;
  return !!localStorage.getItem(doneKey);
}

function renderSundayPrompt(week) {
  const el = document.getElementById('ci-sunday-prompt');
  if (!el) return;
  const today = new Date().getDay(); // 0 = Sunday
  if (today !== 0) { el.innerHTML = ''; return; }
  if (checkCheckinStatus(week)) { el.innerHTML = ''; return; }

  el.innerHTML =
    '<div class="ci-prompt-banner">' +
      '<div class="ci-prompt-eye">Sunday Check-In</div>' +
      '<div class="ci-prompt-title">Week ' + week + ' — Time to Check In</div>' +
      '<div class="ci-prompt-sub">Submit your weekly check-in to get your personalised coaching plan and unlock next week sessions.</div>' +
      '<button class="ci-prompt-btn" onclick="openCheckin()">Start Week ' + week + ' Check-In →</button>' +
    '</div>';
}

function renderSessionGate(week) {
  const el = document.getElementById('ci-locked-wrap');
  if (!el) return;

  // Sessions are locked Monday onwards if check-in not done
  // Grace period: sessions always available Sunday (the check-in day itself)
  const today = new Date().getDay();
  if (today === 0) { el.innerHTML = ''; return; } // Sunday — no gate

  if (checkCheckinStatus(week)) { el.innerHTML = ''; return; } // Done

  // Check if it is Week 1 — no gate on first week
  if (week <= 1) { el.innerHTML = ''; return; }

  el.innerHTML =
    '<div class="ci-locked-banner">' +
      '<div class="ci-locked-title">🔒 Week ' + week + ' Check-In Required</div>' +
      '<div class="ci-locked-sub">Complete your Sunday check-in to unlock this weeks sessions. It takes about 5 minutes.</div>' +
      '<button class="ci-locked-btn" onclick="openCheckin()">Complete Check-In →</button>' +
    '</div>';
}

// ── BODY COMPOSITION PROJECTION ENGINE ───────────────────────────────────────

// Body fat band definitions — sex-specific
function getBFBand(bf, sex) {
  if (sex === 'female') {
    if (bf > 35)   return 'obese';
    if (bf > 28)   return 'high';
    if (bf > 20)   return 'moderate';
    if (bf > 15)   return 'lean';
    if (bf > 10)   return 'athletic';
    return 'essential';
  } else {
    if (bf > 30)   return 'obese';
    if (bf > 22)   return 'high';
    if (bf > 15)   return 'moderate';
    if (bf > 10)   return 'lean';
    if (bf > 6)    return 'athletic';
    return 'essential';
  }
}

// Adaptive thermogenesis factor — how much the body fights back per band
function getAdaptationFactor(band) {
  return { obese:0.95, high:0.92, moderate:0.88, lean:0.82, athletic:0.72, essential:0.60 }[band] || 0.88;
}

// Muscle preservation factor — how much muscle is spared during deficit
function getMusclePreservationFactor(band, experience, goal) {
  // Base: leaner = harder to preserve muscle
  const base = { obese:0.96, high:0.94, moderate:0.91, lean:0.86, athletic:0.78, essential:0.65 }[band] || 0.90;
  // Training experience bonus
  const expBonus = { beginner:0.0, intermediate:0.03, advanced:0.05 }[experience] || 0;
  // Spartan16 programme adds a significant muscle preservation bonus
  const programmeBonus = 0.04;
  return Math.min(0.98, base + expBonus + programmeBonus);
}

// Training calorie burn per week from Spartan16 programme
function getWeeklyTrainingBurn(experience, week, phase) {
  // Base burn increases through phases
  const phaseMult = { 'The Forge': 1.0, 'Armour': 1.15, 'War': 1.25, 'Legacy': 1.1 }[phase] || 1.0;
  const expBase = { beginner: 2200, intermediate: 2800, advanced: 3400 }[experience] || 2500;
  return Math.round(expBase * phaseMult);
}

// Minimum safe deficit by BF band
function getMinCalories(weight, sex, band) {
  const bmrBase = sex === 'female' ? weight * 20 : weight * 22;
  const floors  = { obese:1200, high:1200, moderate:1300, lean:1400, athletic:1500, essential:1600 };
  return Math.max(floors[band] || 1300, bmrBase * 0.65);
}

// Muscle gain potential per week (grams) — natural ceiling
function getMuscleGainPotential(weight, experience, bf, sex, weeklyTrainingBurn) {
  // Novice gains faster, advanced much slower
  const expRate = { beginner: 0.0030, intermediate: 0.0018, advanced: 0.0009 }[experience] || 0.002;
  const base = weight * expRate * 1000; // grams per week
  // Leaner body = slightly better muscle building environment
  const bfFactor = bf < 15 ? 1.1 : bf > 25 ? 0.85 : 1.0;
  return base * bfFactor;
}

// Core projection function — returns weekly data for 16 weeks
function projectWeeklyData(params, adherence) {
  const { weight, bf, calTarget, tdee, goal, sex, experience } = params;
  const adherencePct = adherence / 100;

  let currentWeight = weight;
  let currentBF     = bf;
  let currentFatKg  = weight * (bf / 100);
  let currentMusKg  = weight * (1 - bf / 100) * 0.45; // ~45% of LBM is skeletal muscle

  const weeklyData = [];

  const phases = [
    { name:'The Forge', weeks:[1,2,3,4] },
    { name:'Armour',    weeks:[5,6,7,8] },
    { name:'War',       weeks:[9,10,11,12] },
    { name:'Legacy',    weeks:[13,14,15,16] },
  ];

  for (let week = 1; week <= 16; week++) {
    const phase = phases.find(p => p.weeks.includes(week))?.name || 'The Forge';
    const band  = getBFBand(currentBF, sex);
    const adaptFactor = getAdaptationFactor(band);
    const muscPres    = getMusclePreservationFactor(band, experience, goal);
    const trainingBurn = getWeeklyTrainingBurn(experience, week, phase);

    // Effective weekly calorie balance
    const effectiveCals   = calTarget * adherencePct + calTarget * (1 - adherencePct) * 1.15; // non-adherent days eat slightly more
    const effectiveTDEE   = tdee + (trainingBurn / 7); // TDEE including training
    const weeklyBalance   = (effectiveCals - effectiveTDEE) * 7; // negative = deficit

    // Apply adaptive thermogenesis — body reduces expenditure under deficit
    const adaptedBalance  = goal === 'fat_loss'
      ? weeklyBalance * adaptFactor
      : weeklyBalance;

    // 1kg fat = ~7700 kcal
    const rawFatChange    = adaptedBalance / 7700;

    let fatChange   = 0;
    let muscleChange = 0;

    if (goal === 'fat_loss') {
      // In deficit — lose fat, potentially some muscle
      fatChange   = Math.max(rawFatChange, -1.2); // cap at 1.2kg/week fat loss
      muscleChange = rawFatChange < 0
        ? rawFatChange * (1 - muscPres) * 0.3  // small muscle loss in deficit
        : 0;
      // Spartan16 training preserves most muscle even in deficit
      muscleChange = muscleChange * (1 - 0.6); // programme reduces muscle loss by 60%
    } else if (goal === 'muscle') {
      // In surplus — gain muscle and some fat
      const musclePotential = getMuscleGainPotential(currentWeight, experience, currentBF, sex, trainingBurn) / 1000;
      muscleChange = Math.min(rawFatChange * 0.4, musclePotential); // 40% of surplus becomes muscle, capped at potential
      fatChange    = rawFatChange * 0.6; // 60% becomes fat
      muscleChange = muscleChange * adherencePct;
    } else if (goal === 'recomp') {
      // Maintenance calories — lose fat, gain muscle simultaneously
      const musclePotential = getMuscleGainPotential(currentWeight, experience, currentBF, sex, trainingBurn) / 1000;
      muscleChange = musclePotential * 0.6 * adherencePct; // gain ~60% of potential
      fatChange    = -musclePotential * 0.4;               // slight fat loss from training alone
    } else {
      // Performance / maintain
      muscleChange = getMuscleGainPotential(currentWeight, experience, currentBF, sex, trainingBurn) / 1000 * 0.4 * adherencePct;
      fatChange    = rawFatChange * 0.3;
    }

    currentFatKg += fatChange;
    currentMusKg += muscleChange;
    currentFatKg  = Math.max(currentFatKg, currentWeight * 0.05); // floor: 5% body weight
    currentMusKg  = Math.max(currentMusKg, 10); // floor: 10kg muscle

    // Recalculate weight and BF
    const lbmChange   = currentWeight * (1 - currentBF/100); // preserve LBM tracking
    currentWeight     = currentWeight + fatChange + muscleChange;
    currentBF         = (currentFatKg / currentWeight) * 100;
    currentBF         = Math.max(sex === 'female' ? 8 : 4, Math.min(60, currentBF));

    weeklyData.push({
      week,
      phase,
      weight:       Math.round(currentWeight * 10) / 10,
      bf:           Math.round(currentBF * 10) / 10,
      fatKg:        Math.round(currentFatKg * 10) / 10,
      muscleKg:     Math.round(currentMusKg * 10) / 10,
      fatChange:    Math.round(fatChange * 100) / 100,
      muscleChange: Math.round(muscleChange * 100) / 100,
      weeklyBal:    Math.round(adaptedBalance),
      band,
    });
  }
  return weeklyData;
}

// Build warnings based on inputs
function buildWarningsAndAdvisory(params) {
  const { weight, bf, calTarget, tdee, goal, sex } = params;
  const band    = getBFBand(bf, sex);
  const deficit = tdee - calTarget;
  const minCals = getMinCalories(weight, sex, band);
  const warnings  = [];
  const advisory  = [];

  if (calTarget < minCals) {
    warnings.push({
      title: 'Calorie Target Too Aggressive',
      msg: `At ${bf}% body fat your safe minimum is approximately ${Math.round(minCals)} kcal/day. Your current target of ${calTarget} kcal is below this. Too steep a deficit at this body fat level will cost you muscle and trigger significant metabolic adaptation. Consider increasing to ${Math.round(minCals)} kcal minimum.`
    });
  }

  if (band === 'athletic' || band === 'essential') {
    warnings.push({
      title: 'Low Body Fat — Precision Required',
      msg: `At ${bf}% body fat you are already lean. Your body will fight hard to preserve fat stores. Aggressive deficits will primarily cost muscle, not fat. The projection accounts for this — results will be slower than the maths suggest. Precision nutrition and adequate protein (2.0-2.2g/kg) are non-negotiable at this level.`
    });
  }

  if (goal === 'muscle' && bf > (sex === 'female' ? 30 : 22)) {
    advisory.push({
      title: 'Recomposition May Serve You Better',
      msg: `At ${bf}% body fat, a traditional bulk (calorie surplus) will add more fat than muscle. Your body composition will respond better to a recomposition approach — maintenance calories with high protein and progressive loading. You can build muscle and lose fat simultaneously at your current body fat percentage.`
    });
  }

  if (goal === 'fat_loss' && deficit > 1000) {
    advisory.push({
      title: 'Large Deficit Detected',
      msg: `A ${deficit} kcal/day deficit is aggressive. While it will produce faster initial results, adaptive thermogenesis will slow fat loss over time. The projection accounts for this. Consider cycling calories — eating at maintenance 1-2 days per week — to manage metabolic adaptation.`
    });
  }

  if (band === 'moderate' || band === 'lean') {
    advisory.push({
      title: 'Spartan16 Training Advantage',
      msg: `The combination of heavy compound lifting and high-protein nutrition in Spartan16 significantly improves muscle preservation during fat loss phases compared to cardio-only approaches. The projection accounts for this training advantage — your actual muscle retention should meet or exceed these estimates.`
    });
  }

  return { warnings, advisory };
}

// Key milestones in the projection
function getMilestones(data100, params) {
  const milestones = [];
  const { goal, sex } = params;
  const startWeight = params.weight;
  const startBF = params.bf;

  // 5% weight change milestone
  const target5pct = startWeight * 0.95;
  const week5pct = data100.find(w => goal === 'fat_loss' ? w.weight <= target5pct : w.weight >= startWeight * 1.02);
  if (week5pct) milestones.push({ week: week5pct.week, label: goal === 'fat_loss' ? '5% total weight lost' : '2% weight gained (lean mass)' });

  // Body fat band change
  const startBand = getBFBand(startBF, sex);
  const bandChange = data100.find(w => getBFBand(w.bf, sex) !== startBand);
  if (bandChange) milestones.push({ week: bandChange.week, label: `Body fat drops to ${bandChange.bf}% — new physique band` });

  // Week 8 checkpoint
  const w8 = data100[7];
  if (w8) {
    const weightDiff = Math.abs(w8.weight - startWeight).toFixed(1);
    const bfDiff     = Math.abs(w8.bf - startBF).toFixed(1);
    milestones.push({ week: 8, label: `Halfway: ${weightDiff}kg ${goal==='fat_loss'?'lost':'gained'}, BF ${bfDiff}% ${goal==='fat_loss'?'down':''}` });
  }

  // Week 16 final
  const w16 = data100[15];
  if (w16) {
    const weightDiff = Math.abs(w16.weight - startWeight).toFixed(1);
    milestones.push({ week: 16, label: `Final: ${weightDiff}kg ${goal==='fat_loss'?'lost':'gained'}, ${w16.bf}% body fat` });
  }

  return milestones;
}

let projData100 = [];
let projData80  = [];
let projParams  = {};
let projChart   = null;
let activeScenario = 100;

// Auto-calculate TDEE and calorie target from user inputs
function projAutoCalc() {
  const weight = parseFloat(document.getElementById('pr-weight')?.value);
  const age    = parseFloat(document.getElementById('pr-age')?.value);
  const height = parseFloat(document.getElementById('pr-height')?.value);
  const sex    = document.getElementById('pr-sex')?.value || 'male';
  const goal   = document.getElementById('pr-goal')?.value;

  const resultEl  = document.getElementById('proj-calc-result');
  const tdeeEl    = document.getElementById('proj-tdee-display');
  const targetEl  = document.getElementById('proj-target-display');
  const noteEl    = document.getElementById('proj-calc-note');
  const calcBtn   = document.getElementById('proj-calc-btn');

  if (!weight || !age || !height) {
    if (resultEl) resultEl.style.display = 'none';
    if (calcBtn)  calcBtn.style.display  = 'none';
    return;
  }

  // Mifflin-St Jeor BMR
  let bmr;
  if (sex === 'female') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }

  // Spartan16 is 5 sessions/week — moderately active multiplier
  const tdee = Math.round(bmr * 1.55);

  // Calorie target based on goal
  let calTarget, note;
  if (goal === 'fat_loss') {
    // 500 kcal deficit — safe and sustainable
    calTarget = Math.round(tdee - 500);
    note = 'A 500 kcal/day deficit. Expect 0.4–0.6kg fat loss per week. Spartan16 training preserves muscle even in a deficit.';
  } else if (goal === 'muscle') {
    // 300 kcal surplus — lean bulk
    calTarget = Math.round(tdee + 300);
    note = 'A 300 kcal/day surplus — enough to build muscle without excessive fat gain. Protein target is critical.';
  } else if (goal === 'recomp') {
    // Maintenance calories
    calTarget = tdee;
    note = 'Maintenance calories with high protein. You will lose fat and build muscle simultaneously — slower but highly effective at your training level.';
  } else {
    // Performance / maintain
    calTarget = tdee;
    note = 'Maintenance calories to fuel performance. Focus on hitting protein and carbohydrate targets around sessions.';
  }

  // Floor at 1200 female / 1500 male
  const floor = sex === 'female' ? 1200 : 1500;
  calTarget = Math.max(calTarget, floor);

  // Set hidden input values for calculateProjection()
  const tEl = document.getElementById('pr-tdee');
  const cEl = document.getElementById('pr-cals');
  if (tEl) tEl.value = tdee;
  if (cEl) cEl.value = calTarget;

  // Update display
  if (tdeeEl)   tdeeEl.textContent   = tdee.toLocaleString();
  if (targetEl) targetEl.textContent = calTarget.toLocaleString();
  if (noteEl)   noteEl.textContent   = note || '';
  if (resultEl) resultEl.style.display = goal ? 'block' : 'none';
  if (calcBtn)  calcBtn.style.display  = goal ? 'block' : 'none';
}

function calculateProjection() {
  const weight  = parseFloat(document.getElementById('pr-weight')?.value);
  const bf      = parseFloat(document.getElementById('pr-bf')?.value);
  const calTarget = parseFloat(document.getElementById('pr-cals')?.value);
  const tdee    = parseFloat(document.getElementById('pr-tdee')?.value);
  const goal    = document.getElementById('pr-goal')?.value;
  const sex     = document.getElementById('pr-sex')?.value || 'male';
  const experience = document.getElementById('pr-exp')?.value || 'intermediate';

  if (!weight || !bf || !calTarget || !tdee || !goal) {
    alert('Please fill in weight, body fat, age, height and select a goal to generate your projection.');
    return;
  }

  projParams = { weight, bf, calTarget, tdee, goal, sex, experience };
  projData100 = projectWeeklyData(projParams, 100);
  projData80  = projectWeeklyData(projParams, 80);

  renderProjectionResults();
}

function renderProjectionResults() {
  const el = document.getElementById('proj-results-section');
  if (!el) return;

  const { warnings, advisory } = buildWarningsAndAdvisory(projParams);
  const milestones = getMilestones(projData100, projParams);
  const { weight, bf, goal } = projParams;

  const w16_100 = projData100[15];
  const w16_80  = projData80[15];
  const weightChange100 = (w16_100.weight - weight).toFixed(1);
  const weightChange80  = (w16_80.weight  - weight).toFixed(1);
  const bfChange100     = (w16_100.bf - bf).toFixed(1);
  const bfChange80      = (w16_80.bf  - bf).toFixed(1);
  const fatChange100    = (w16_100.fatKg  - weight * bf / 100).toFixed(1);
  const fatChange80     = (w16_80.fatKg   - weight * bf / 100).toFixed(1);
  const muscChange100   = (w16_100.muscleKg - weight * (1 - bf / 100) * 0.45).toFixed(1);
  const muscChange80    = (w16_80.muscleKg  - weight * (1 - bf / 100) * 0.45).toFixed(1);

  const goalLabel = { fat_loss:'fat lost', muscle:'muscle gained', recomp:'body recomposed', performance:'maintained' }[goal] || '';
  const isLoss = goal === 'fat_loss' || parseFloat(weightChange100) < 0;

  el.innerHTML =
    warnings.map(w =>
      '<div class="proj-warning"><strong>⚠️ ' + w.title + '</strong>' + w.msg + '</div>'
    ).join('') +
    advisory.map(a =>
      '<div class="proj-advisory"><strong>💡 ' + a.title + '</strong>' + a.msg + '</div>'
    ).join('') +

    '<div class="proj-scenario-tabs">' +
      '<div class="pst sel" id="pst-100" onclick="switchScenario(100)">100% Adherence</div>' +
      '<div class="pst" id="pst-80" onclick="switchScenario(80)">80% Adherence</div>' +
    '</div>' +

    '<div class="proj-summary-grid" id="proj-summary">' +
      buildSummaryCards(w16_100, weight, bf, goal) +
    '</div>' +

    '<div class="proj-chart-wrap">' +
      '<div class="proj-chart-title">Weight Over 16 Weeks — Both Scenarios</div>' +
      '<div class="proj-chart"><canvas id="proj-canvas"></canvas></div>' +
    '</div>' +

    '<div class="proj-chart-wrap">' +
      '<div class="proj-chart-title">Body Fat % Over 16 Weeks</div>' +
      '<div class="proj-chart"><canvas id="proj-bf-canvas"></canvas></div>' +
    '</div>' +

    '<div class="proj-chart-wrap">' +
      '<div class="proj-chart-title">Key Milestones</div>' +
      '<div class="proj-milestone-list">' +
        milestones.map(m =>
          '<div class="proj-milestone"><div class="proj-milestone-week">WK ' + m.week + '</div><div>' + m.label + '</div></div>'
        ).join('') +
      '</div>' +
    '</div>' +

    '<div class="proj-chart-wrap">' +
      '<div class="proj-chart-title" id="proj-table-title">Weekly Breakdown — 100% Adherence</div>' +
      '<div style="overflow-x:auto"><table class="proj-weekly-table" id="proj-table">' +
        buildWeeklyTable(projData100) +
      '</table></div>' +
    '</div>' +

    '<div class="proj-advisory" style="margin-top:4px">' +
      '<strong>How to read this projection</strong>' +
      'These are evidence-based estimates, not guarantees. Individual results vary based on genetics, sleep quality, stress levels and exact adherence. ' +
      'The 80% scenario shows that missing 1 in 5 sessions and being imperfect with nutrition still produces meaningful transformation. ' +
      'Adaptive thermogenesis has been factored in — results will be faster early and slower later, which is completely normal. ' +
      'Track your actual progress against the projection in your weekly check-in.' +
    '</div>' +

    '<div class="proj-reset" onclick="resetProjection()">Recalculate with different numbers</div>';

  el.style.display = 'block';
  document.getElementById('proj-input-section').style.display = 'none';

  // Draw charts after render
  setTimeout(() => {
    drawWeightChart();
    drawBFChart();
  }, 100);
}

function buildSummaryCards(w16, startWeight, startBF, goal) {
  const weightDiff = (w16.weight - startWeight).toFixed(1);
  const bfDiff     = (w16.bf - startBF).toFixed(1);
  const fatDiff    = (w16.fatKg - startWeight * startBF / 100).toFixed(1);
  const muscDiff   = (w16.muscleKg - startWeight * (1 - startBF / 100) * 0.45).toFixed(1);
  const isLoss     = parseFloat(weightDiff) < 0;

  return [
    { label: 'Weight at Week 16', val: w16.weight + 'kg', sub: (isLoss?'':'+') + weightDiff + 'kg from now', highlight: true },
    { label: 'Body Fat at Week 16', val: w16.bf + '%', sub: bfDiff + '% change', highlight: false },
    { label: 'Fat Mass Change', val: (parseFloat(fatDiff) < 0 ? '' : '+') + fatDiff + 'kg', sub: 'fat lost/gained', highlight: false },
    { label: 'Muscle Change', val: (parseFloat(muscDiff) > 0 ? '+' : '') + muscDiff + 'kg', sub: 'skeletal muscle est.', highlight: false },
  ].map(card =>
    '<div class="proj-summary-card' + (card.highlight ? ' highlight' : '') + '">' +
      '<div class="psc-label">' + card.label + '</div>' +
      '<div class="psc-val">' + card.val + '</div>' +
      '<div class="psc-sub">' + card.sub + '</div>' +
    '</div>'
  ).join('');
}

function buildWeeklyTable(data) {
  return '<thead><tr>' +
    '<th>Wk</th><th>Phase</th><th>Weight</th><th>BF%</th><th>Fat</th><th>Muscle</th>' +
    '</tr></thead><tbody>' +
    data.map(w => {
      const fClass = w.fatChange < 0 ? 'pos' : w.fatChange > 0 ? 'neg' : '';
      const mClass = w.muscleChange > 0 ? 'pos' : w.muscleChange < 0 ? 'neg' : '';
      return '<tr>' +
        '<td>' + w.week + '</td>' +
        '<td style="font-size:10px">' + w.phase.replace('The ','') + '</td>' +
        '<td>' + w.weight + '</td>' +
        '<td>' + w.bf + '%</td>' +
        '<td class="' + fClass + '">' + (w.fatChange > 0 ? '+' : '') + w.fatChange + '</td>' +
        '<td class="' + mClass + '">' + (w.muscleChange > 0 ? '+' : '') + w.muscleChange + '</td>' +
      '</tr>';
    }).join('') +
    '</tbody>';
}

function switchScenario(pct) {
  activeScenario = pct;
  document.getElementById('pst-100')?.classList.toggle('sel', pct === 100);
  document.getElementById('pst-80')?.classList.toggle('sel', pct === 80);

  const data = pct === 100 ? projData100 : projData80;
  const w16  = data[15];

  document.getElementById('proj-summary').innerHTML = buildSummaryCards(w16, projParams.weight, projParams.bf, projParams.goal);
  document.getElementById('proj-table').innerHTML = buildWeeklyTable(data);
  document.getElementById('proj-table-title').textContent = 'Weekly Breakdown — ' + pct + '% Adherence';
}

function drawWeightChart() {
  const canvas = document.getElementById('proj-canvas');
  if (!canvas || !projData100.length) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * window.devicePixelRatio || 300;
  canvas.height = 180 * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  const W = canvas.offsetWidth || 300;
  const H = 180;
  const pad = { t:20, r:16, b:30, l:50 };
  const cW = W - pad.l - pad.r;
  const cH = H - pad.t - pad.b;

  const allWeights = [...projData100.map(d=>d.weight), ...projData80.map(d=>d.weight), projParams.weight];
  const minW = Math.floor(Math.min(...allWeights) - 1);
  const maxW = Math.ceil(Math.max(...allWeights) + 1);

  const xScale = w => pad.l + ((w-1) / 15) * cW;
  const yScale = v => pad.t + cH - ((v - minW) / (maxW - minW)) * cH;

  ctx.clearRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = 'rgba(42,42,42,0.8)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (cH / 4) * i;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cW, y); ctx.stroke();
    const val = maxW - ((maxW - minW) / 4) * i;
    ctx.fillStyle = 'rgba(153,153,153,0.8)';
    ctx.font = '10px Barlow';
    ctx.fillText(val.toFixed(1), 2, y + 3);
  }

  // Shade area between scenarios
  ctx.beginPath();
  ctx.moveTo(xScale(1), yScale(projData100[0].weight));
  projData100.forEach((d,i) => ctx.lineTo(xScale(i+1), yScale(d.weight)));
  projData80.slice().reverse().forEach((d,i) => ctx.lineTo(xScale(16-i), yScale(d.weight)));
  ctx.closePath();
  ctx.fillStyle = 'rgba(139,0,0,0.08)';
  ctx.fill();

  // Draw 100% line (crimson)
  ctx.beginPath();
  ctx.strokeStyle = '#C41E3A';
  ctx.lineWidth = 2;
  projData100.forEach((d,i) => i===0 ? ctx.moveTo(xScale(i+1), yScale(d.weight)) : ctx.lineTo(xScale(i+1), yScale(d.weight)));
  ctx.stroke();

  // Draw 80% line (gold, dashed)
  ctx.beginPath();
  ctx.strokeStyle = '#C9A84C';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4,3]);
  projData80.forEach((d,i) => i===0 ? ctx.moveTo(xScale(i+1), yScale(d.weight)) : ctx.lineTo(xScale(i+1), yScale(d.weight)));
  ctx.stroke();
  ctx.setLineDash([]);

  // Start point dot
  ctx.beginPath();
  ctx.arc(xScale(1), yScale(projParams.weight), 4, 0, Math.PI*2);
  ctx.fillStyle = '#fff'; ctx.fill();

  // X axis labels
  ctx.fillStyle = 'rgba(153,153,153,0.8)';
  ctx.font = '9px Barlow';
  [1,4,8,12,16].forEach(w => ctx.fillText('W'+w, xScale(w)-8, H-6));

  // Legend
  ctx.fillStyle = '#C41E3A'; ctx.fillRect(pad.l, 4, 16, 2);
  ctx.fillStyle = '#ccc'; ctx.font = '9px Barlow'; ctx.fillText('100%', pad.l+20, 10);
  ctx.fillStyle = '#C9A84C'; ctx.fillRect(pad.l+55, 4, 16, 2);
  ctx.fillStyle = '#ccc'; ctx.fillText('80%', pad.l+75, 10);
}

function drawBFChart() {
  const canvas = document.getElementById('proj-bf-canvas');
  if (!canvas || !projData100.length) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * window.devicePixelRatio || 300;
  canvas.height = 180 * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  const W = canvas.offsetWidth || 300;
  const H = 180;
  const pad = { t:20, r:16, b:30, l:50 };
  const cW = W - pad.l - pad.r;
  const cH = H - pad.t - pad.b;

  const allBFs = [...projData100.map(d=>d.bf), ...projData80.map(d=>d.bf), projParams.bf];
  const minBF = Math.floor(Math.min(...allBFs) - 1);
  const maxBF = Math.ceil(Math.max(...allBFs) + 1);

  const xScale = w => pad.l + ((w-1) / 15) * cW;
  const yScale = v => pad.t + cH - ((v - minBF) / (maxBF - minBF)) * cH;

  ctx.clearRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = 'rgba(42,42,42,0.8)'; ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (cH/4)*i;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l+cW, y); ctx.stroke();
    const val = maxBF - ((maxBF-minBF)/4)*i;
    ctx.fillStyle = 'rgba(153,153,153,0.8)'; ctx.font = '10px Barlow';
    ctx.fillText(val.toFixed(1)+'%', 2, y+3);
  }

  // Shade
  ctx.beginPath();
  ctx.moveTo(xScale(1), yScale(projData100[0].bf));
  projData100.forEach((d,i) => ctx.lineTo(xScale(i+1), yScale(d.bf)));
  projData80.slice().reverse().forEach((d,i) => ctx.lineTo(xScale(16-i), yScale(d.bf)));
  ctx.closePath(); ctx.fillStyle = 'rgba(45,106,45,0.08)'; ctx.fill();

  // 100% line
  ctx.beginPath(); ctx.strokeStyle = '#2D6A2D'; ctx.lineWidth = 2;
  projData100.forEach((d,i) => i===0 ? ctx.moveTo(xScale(i+1), yScale(d.bf)) : ctx.lineTo(xScale(i+1), yScale(d.bf)));
  ctx.stroke();

  // 80% line dashed
  ctx.beginPath(); ctx.strokeStyle = '#C9A84C'; ctx.lineWidth = 1.5; ctx.setLineDash([4,3]);
  projData80.forEach((d,i) => i===0 ? ctx.moveTo(xScale(i+1), yScale(d.bf)) : ctx.lineTo(xScale(i+1), yScale(d.bf)));
  ctx.stroke(); ctx.setLineDash([]);

  // X labels
  ctx.fillStyle = 'rgba(153,153,153,0.8)'; ctx.font = '9px Barlow';
  [1,4,8,12,16].forEach(w => ctx.fillText('W'+w, xScale(w)-8, H-6));
}

function resetProjection() {
  document.getElementById('proj-input-section').style.display = 'block';
  document.getElementById('proj-results-section').style.display = 'none';
  document.getElementById('proj-results-section').innerHTML = '';
}

async function loadProjectionTab() {
  const email = currentUser?.email;
  if (!email) return;
  try {
    const rows = await sbGet(`client_baselines?email=eq.${encodeURIComponent(email)}&limit=1&select=*`);
    const pu   = await sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=sex,client_type`);

    if (rows.length) {
      const r = rows[0];
      if (r.weight_kg)    { const el = document.getElementById('pr-weight'); if (el) el.value = r.weight_kg; }
      if (r.body_fat_pct) { const el = document.getElementById('pr-bf');     if (el) el.value = r.body_fat_pct; }
      if (r.height_cm)    { const el = document.getElementById('pr-height'); if (el) el.value = r.height_cm; }
      if (r.experience) {
        const expEl = document.getElementById('pr-exp');
        if (expEl) expEl.value = r.experience || 'intermediate';
      }
      // Derive age from date of birth if available
      if (r.date_of_birth) {
        const dob  = new Date(r.date_of_birth);
        const age  = Math.floor((new Date() - dob) / (365.25 * 24 * 60 * 60 * 1000));
        const ageEl = document.getElementById('pr-age');
        if (ageEl && age > 0 && age < 100) ageEl.value = age;
      }
    }
    if (pu.length && pu[0].sex) {
      const sexEl = document.getElementById('pr-sex');
      if (sexEl) sexEl.value = pu[0].sex;
    }
    // Trigger auto-calculation if enough data is present
    projAutoCalc();
  } catch(_) {}
}

// ── COHORT DATES AND COUNTDOWN ───────────────────────────────────────────────

const TEST_WEEKS = [1, 8, 15]; // 300 Test weeks

function getActiveCohort() {
  const now = new Date();
  // Find the next upcoming or currently active cohort
  return COHORTS.find(co => co.end > now) || COHORTS[COHORTS.length - 1];
}

function isCohortLive() {
  const { state } = getActiveCohort();
  return state === 'active';
}

function daysUntilCohort() {
  const now    = new Date();
  const cohort = getActiveCohort();
  if (now >= cohort.start) return 0;
  return Math.ceil((cohort.start - now) / (1000*60*60*24));
}

function renderCountdown() {
  const cohort = getActiveCohort();
  const now    = new Date();
  const target = cohort.start;
  const diff   = target - now;

  if (diff <= 0) return; // Cohort is live — no countdown needed

  const days  = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins  = Math.floor((diff % (1000*60*60)) / (1000*60));
  const secs  = Math.floor((diff % (1000*60)) / 1000);

  const pad = n => String(n).padStart(2,'0');
  const startStr = cohort.start.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  // Replace home tab content with countdown screen
  const homeEl = document.getElementById('screen-home');
  if (!homeEl) return;

  homeEl.innerHTML = `
    <div class="countdown-screen">
      <div class="cd-hero">
        <div class="cd-eyebrow">🛡️ ${cohort.name}</div>
        <div class="cd-title">Programme Starts In</div>
        <div class="cd-date">${startStr}</div>
        <div class="cd-timer">
          <div class="cd-unit"><div class="cd-num" id="cd-days">${String(days).padStart(2,'0')}</div><div class="cd-label">Days</div></div>
          <div class="cd-unit"><div class="cd-num" id="cd-hours">${pad(hours)}</div><div class="cd-label">Hours</div></div>
          <div class="cd-unit"><div class="cd-num" id="cd-mins">${pad(mins)}</div><div class="cd-label">Mins</div></div>
          <div class="cd-unit"><div class="cd-num" id="cd-secs">${pad(secs)}</div><div class="cd-label">Secs</div></div>
        </div>
        <div class="cd-sub">
          Use this time to set your nutrition targets, read the knowledge base
          and introduce yourself in the Brotherhood.
        </div>
      </div>

      <div class="cd-locked-features">
        <div class="cd-locked-title">What Unlocks on Day 1</div>
        <div class="cd-locked-item">
          <div class="cd-locked-icon">📋</div>
          <div class="cd-locked-text">Weekly check-in and AI coaching plan</div>
          <div class="cd-locked-badge">31 Aug</div>
        </div>
        <div class="cd-locked-item">
          <div class="cd-locked-icon">✏️</div>
          <div class="cd-locked-text">Session logging and workout plan</div>
          <div class="cd-locked-badge">31 Aug</div>
        </div>
        <div class="cd-locked-item">
          <div class="cd-locked-icon">📊</div>
          <div class="cd-locked-text">Progress tracking and fitness testing</div>
          <div class="cd-locked-badge">31 Aug</div>
        </div>
        <div class="cd-locked-item cd-unlocked-item">
          <div class="cd-locked-icon">🥗</div>
          <div class="cd-locked-text">Nutrition calculator and meal plan</div>
          <div class="cd-locked-badge" style="border-color:rgba(45,106,45,.4);color:var(--greenl)">Available now</div>
        </div>
        <div class="cd-locked-item cd-unlocked-item">
          <div class="cd-locked-icon">🛡️</div>
          <div class="cd-locked-text">Brotherhood community</div>
          <div class="cd-locked-badge" style="border-color:rgba(45,106,45,.4);color:var(--greenl)">Available now</div>
        </div>
        <div class="cd-locked-item cd-unlocked-item">
          <div class="cd-locked-icon">📖</div>
          <div class="cd-locked-text">Knowledge base — evergreen articles</div>
          <div class="cd-locked-badge" style="border-color:rgba(45,106,45,.4);color:var(--greenl)">Available now</div>
        </div>
      </div>
    </div>`;

  // Tick the countdown every second
  let interval = setInterval(() => {
    const now2  = new Date();
    const diff2 = target - now2;
    if (diff2 <= 0) {
      clearInterval(interval);
      loadClientHome(); // Reload home when cohort goes live
      return;
    }
    const d2 = Math.floor(diff2/(1000*60*60*24));
    const h2 = Math.floor((diff2%(1000*60*60*24))/(1000*60*60));
    const m2 = Math.floor((diff2%(1000*60*60))/(1000*60));
    const s2 = Math.floor((diff2%(1000*60))/1000);
    document.getElementById('cd-days')?.textContent !== undefined &&
      (document.getElementById('cd-days').textContent  = String(d2).padStart(2,'0'));
    document.getElementById('cd-hours')?.textContent !== undefined &&
      (document.getElementById('cd-hours').textContent = pad(h2));
    document.getElementById('cd-mins')?.textContent !== undefined &&
      (document.getElementById('cd-mins').textContent  = pad(m2));
    document.getElementById('cd-secs')?.textContent !== undefined &&
      (document.getElementById('cd-secs').textContent  = pad(s2));
  }, 1000);
}

// ── 300 TEST COUNTDOWN ────────────────────────────────────────────────────────
function render300TestCountdown(week) {
  const el = document.getElementById('test-countdown-card');
  if (!el) return;

  // Find next test week
  const nextTestWeek = TEST_WEEKS.find(w => w >= week);
  if (!nextTestWeek) { el.innerHTML = ''; return; }

  const isTestWeek = nextTestWeek === week;
  const weeksAway  = nextTestWeek - week;

  if (isTestWeek) {
    el.innerHTML = `
      <div class="test-countdown" style="border-color:rgba(201,168,76,.5);background:linear-gradient(135deg,rgba(139,0,0,.15),rgba(201,168,76,.06))">
        <div class="tc-left">
          <div class="tc-icon">⏱️</div>
          <div>
            <div class="tc-label">This Week</div>
            <div class="tc-text">300 Test day — Monday. Be ready.</div>
          </div>
        </div>
        <div class="tc-right">
          <div class="tc-days" style="color:var(--cr)">NOW</div>
          <div class="tc-days-label">Week ${week}</div>
        </div>
      </div>`;
  } else if (weeksAway <= 3) {
    el.innerHTML = `
      <div class="test-countdown">
        <div class="tc-left">
          <div class="tc-icon">⏱️</div>
          <div>
            <div class="tc-label">300 Test Coming Up</div>
            <div class="tc-text">Week ${nextTestWeek} — start preparing now</div>
          </div>
        </div>
        <div class="tc-right">
          <div class="tc-days">${weeksAway}</div>
          <div class="tc-days-label">${weeksAway === 1 ? 'week away' : 'weeks away'}</div>
        </div>
      </div>`;
  } else {
    el.innerHTML = ''; // Too far away — do not show
  }
}

// ── AI COACHING PLAN DISPLAY ──────────────────────────────────────────────────
async function loadCoachingPlanCard(email) {
  const el = document.getElementById('coaching-plan-card');
  if (!el) return;

  // Get latest check-in with AI plan
  try {
    const checkins = await sbGet(
      `checkin_submissions?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=1&select=*`
    );
    if (!checkins.length || !checkins[0].ai_coaching_plan) {
      el.innerHTML = '';
      return;
    }

    const latest  = checkins[0];
    const plan    = latest.ai_coaching_plan;
    const weekNum = latest.week_number || '?';
    const date    = new Date(latest.created_at).toLocaleDateString('en-GB',{day:'numeric',month:'long'});

    // Split plan into paragraphs for display

    el.innerHTML = `
      <div class="coaching-plan-card">
        <div class="cpc-head" onclick="toggleCoachingPlan()">
          <div class="cpc-left">
            <div class="cpc-icon">📋</div>
            <div>
              <div class="cpc-label">Your Weekly Coaching Plan</div>
              <div class="cpc-title">Week ${weekNum} — from Mike</div>
            </div>
          </div>
          <div class="cpc-chevron" id="cpc-chevron">▾</div>
        </div>
        <div class="cpc-body" id="cpc-body">
          ${paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="cpc-week">Submitted ${date} · Tap to expand</div>
      </div>`;

  } catch(e) {
    el.innerHTML = '';
  }
}

function toggleCoachingPlan() {
  const body  = document.getElementById('cpc-body');
  const chev  = document.getElementById('cpc-chevron');
  const note  = document.querySelector('.cpc-week');
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (chev) chev.classList.toggle('open', !open);
  if (note) note.textContent = open ? 'Submitted ' + note.textContent.split(' · ')[0].replace('Submitted ','') + ' · Tap to expand' : 'Tap to collapse';
}

// ── COHORT DATES AND COUNTDOWN ───────────────────────────────────────────────
const COHORTS = [
  {
    name:    'Cohort 1 — 2026',
    start:   new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end:     new Date(Date.now() + 100 * 24 * 60 * 60 * 1000),
    label:   '31 Aug — 20 Dec 2026',
  },
  {
    name:    'Cohort 2 — 2027',
    start:   new Date('2027-01-04T06:00:00'),
    end:     new Date('2027-04-26T23:59:59'),
    label:   '4 Jan — 26 Apr 2027',
  },
];

let countdownInterval = null;

function getActiveCohort() {
  const now = new Date();
  // Find cohort that has started but not ended
  const active = COHORTS.find(c => now >= c.start && now <= c.end);
  if (active) return { cohort: active, state: 'active' };
  // Find next upcoming cohort
  const upcoming = COHORTS.find(c => now < c.start);
  if (upcoming) return { cohort: upcoming, state: 'upcoming' };
  // All cohorts ended
  return { cohort: COHORTS[COHORTS.length - 1], state: 'ended' };
}

function checkCohortGate() {
  const { cohort, state } = getActiveCohort();
  if (state === 'active') return false; // Programme is live — no countdown
  return true; // Show countdown
}

function startCountdown() {
  const { cohort, state } = getActiveCohort();
  if (state !== 'upcoming') return;

  const labelEl   = document.getElementById('cd-cohort-label');
  const titleEl   = document.getElementById('cd-title');
  const subtitleEl = document.getElementById('cd-subtitle');

  if (labelEl)    labelEl.innerHTML   = `Next cohort: <strong>${cohort.label}</strong>`;
  if (titleEl)    titleEl.textContent = 'Programme Begins In';
  if (subtitleEl) subtitleEl.textContent = 'Your programme is locked and loaded. The Forge fires on ' + cohort.start.toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'}) + '.';

  function tick() {
    const now  = new Date();
    const diff = cohort.start - now;
    if (diff <= 0) {
      // Cohort just started — reload the app
      clearInterval(countdownInterval);
      location.reload();
      return;
    }
    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');
    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(mins);
    if (sEl) sEl.textContent = pad(secs);
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

function showCountdownScreen() {
  // Hide normal home content, show countdown
  const homeEl = document.getElementById('screen-home');
  if (homeEl) homeEl.style.display = 'none';

  const cdEl = document.getElementById('screen-countdown');
  if (cdEl) {
    cdEl.style.display = 'block';
    cdEl.classList.add('active');
  }

  // Still show nav but limit to safe tabs
  document.getElementById('client-nav').style.display = 'flex';

  startCountdown();
}

// ── WEEKLY COACHING PLAN CARD ─────────────────────────────────────────────────
async function loadCoachingPlanCard(email, week) {
  const el = document.getElementById('coaching-plan-card');
  if (!el) return;

  try {
    // Get latest check-in with AI coaching plan
    const checkins = await sbGet(
      `checkin_submissions?email=eq.${encodeURIComponent(email)}&order=submitted_at.desc&limit=1&select=*`
    );

    if (!checkins.length || !checkins[0].ai_coaching_plan) {
      el.innerHTML = `
        <div class="coaching-plan-card">
          <div class="cp-no-checkin">
            No coaching plan yet. Submit your Sunday check-in to generate this weeks plan.
          </div>
        </div>`;
      return;
    }

    const plan = checkins[0].ai_coaching_plan;
    const checkinWeek = checkins[0].week_number || week;
    const planHtml = plan.replace(/[\r\n]+/g, '<br>');

    el.innerHTML =
      '<div class="coaching-plan-card">' +
        '<div class="cp-head" onclick="toggleCoachingPlan()">' +
          '<div class="cp-head-left">' +
            '<div class="cp-icon">🧠</div>' +
            '<div>' +
              '<div class="cp-title">This Week\'s Coaching Plan</div>' +
              '<div class="cp-week">Week ' + checkinWeek + ' · from your Sunday check-in</div>' +
            '</div>' +
          '</div>' +
          '<div class="cp-chevron" id="cp-chevron">▾</div>' +
        '</div>' +
        '<div class="cp-body" id="cp-body">' +
          '<p>' + planHtml + '</p>' +
        '</div>' +
      '</div>';

    } catch(_) {
    el.innerHTML = '';
  }
}

function toggleCoachingPlan() {
  const body = document.getElementById('cp-body');
  const chev = document.getElementById('cp-chevron');
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (chev) chev.classList.toggle('open', !open);
}

// ── INTAKE GATE ───────────────────────────────────────────────────────────────
let intakeCur     = 1;
const INTAKE_TOTAL = 12;
let intakeSex     = '';
let intakeCommitted = false;
let intakeRadioVals = {};
let intakeChipVals  = {};

function iv(id) { return (document.getElementById(id)?.value || '').trim(); }

function selectIntakeSex(el, sex) {
  intakeSex = sex;
  document.querySelectorAll('.intake-sex-pill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  // Show/hide cycle length on phase 10
  const cycleField = document.getElementById('cycle-length-field');
  if (cycleField) {
    cycleField.style.display = (sex === 'female') ? 'block' : 'none';
  }
}

function selectIntakeRadio(el, name, value) {
  // Deselect siblings in same group
  el.closest('.radio-cards')?.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  intakeRadioVals[name] = value;
}

function selectIntakeChip(el, name, value) {
  intakeChipVals[name] = value;
  // Toggle within the pair
  el.closest('div').querySelectorAll('.intake-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function toggleIntakeChip(el) {
  el.classList.toggle('sel');
}

function intakeCommit(el) {
  el.classList.toggle('sel');
  intakeCommitted = el.classList.contains('sel');
  var box = document.getElementById('commit-checkbox');
  if (box) {
    box.innerHTML      = intakeCommitted ? '&#10003;' : '&nbsp;';
    box.style.color    = 'var(--greenl)';
    box.style.background = intakeCommitted ? 'rgba(45,106,45,.2)' : '';
    box.style.border   = intakeCommitted ? '2px solid var(--greenl)' : '2px solid var(--bd)';
  }
  el.style.borderColor = intakeCommitted ? 'var(--greenl)' : 'var(--bd)';
  el.style.background  = intakeCommitted ? 'rgba(45,106,45,.08)' : '#111';
}

function updateIntakeProgress() {
  const pct = Math.round((intakeCur / INTAKE_TOTAL) * 100);
  const fill = document.getElementById('intake-progress-fill');
  const counter = document.getElementById('intake-phase-counter');
  if (fill) fill.style.width = pct + '%';
  if (counter) {
    const labels = ['','Tell us about you','Body stats','Primary goal','Training history',
      'Nutrition habits','Medical and health','Lifestyle and sleep','Mindset',
      'Life context','Female health','Starting measurements','Final commitment'];
    counter.textContent = 'Step ' + intakeCur + ' of ' + INTAKE_TOTAL + ' — ' + (labels[intakeCur] || '');
  }
}

function intakeNext() {
  // Validation per phase
  if (intakeCur === 1) {
    if (!iv('if_first') || !iv('if_last')) {
      alert('Please enter your full name.'); return;
    }
    if (!iv('if_email') || !iv('if_email').includes('@')) {
      alert('Please enter a valid email address.'); return;
    }
    if (!intakeSex) {
      alert('Please select your biological sex.'); return;
    }
  }
  if (intakeCur === 2) {
    if (!iv('if_weight')) {
      alert('Please enter your current weight.'); return;
    }
  }
  if (intakeCur === 3) {
    if (!intakeRadioVals['goal']) {
      alert('Please select your primary goal.'); return;
    }
  }
  if (intakeCur === 12) {
    if (!intakeCommitted) {
      showToast('Please tick the commitment box to continue.');
      var commitBtn = document.getElementById('intake-commit-btn');
      if (commitBtn) commitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    submitIntake();
    return;
  }

  // Skip phase 10 for male clients
  let next = intakeCur + 1;
  if (intakeCur === 9 && intakeSex === 'male') next = 11;

  var curEl = document.getElementById('ip' + intakeCur);
  if (curEl) curEl.classList.remove('active');
  intakeCur = next;
  var nextEl = document.getElementById('ip' + intakeCur);
  if (nextEl) nextEl.classList.add('active');

  updateIntakeProgress();

  document.getElementById('intake-back-btn').style.display = intakeCur > 1 ? 'block' : 'none';

  var nextBtn = document.getElementById('intake-next-btn');
  if (nextBtn) nextBtn.textContent = intakeCur === INTAKE_TOTAL ? 'Submit and Enter App →' : 'Continue →';

  var gate = document.getElementById('intake-gate');
  if (gate) gate.scrollTop = 0;
}

function intakeBack() {
  let prev = intakeCur - 1;
  if (intakeCur === 11 && intakeSex === 'male') prev = 9;

  var curElB = document.getElementById('ip' + intakeCur);
  if (curElB) curElB.classList.remove('active');
  intakeCur = prev;
  var prevElB = document.getElementById('ip' + intakeCur);
  if (prevElB) prevElB.classList.add('active');

  updateIntakeProgress();
  document.getElementById('intake-back-btn').style.display = intakeCur > 1 ? 'block' : 'none';
  const nextBtn = document.getElementById('intake-next-btn');
  if (nextBtn) nextBtn.textContent = 'Continue →';
  document.getElementById('intake-gate').scrollTop = 0;
}

function getIntoleranices() {
  const chips = document.querySelectorAll('#intolerance-chips .intake-chip.sel');
  return Array.from(chips).map(c => c.textContent).join(', ');
}

async function submitIntake() {
  // On-screen debug panel
  var dbg = document.getElementById('s16-dbg');
  if (!dbg) {
    dbg = document.createElement('div');
    dbg.id = 's16-dbg';
    dbg.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#111;color:#0f0;font-size:11px;font-family:monospace;padding:8px 10px;z-index:99999;border-bottom:2px solid #0f0;max-height:180px;overflow-y:auto';
    document.body.appendChild(dbg);
  }
  function log(msg) {
    dbg.innerHTML += '<div>' + msg + '</div>';
    dbg.scrollTop = dbg.scrollHeight;
    console.log('[INTAKE]', msg);
  }

  log('Step 1: submitIntake called');

  var btn = document.getElementById('intake-next-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Submitting...'; }

  // Re-read session
  if (!currentUser) { loadSession(); }
  log('Step 2: currentUser = ' + (currentUser ? currentUser.email : 'NULL'));

  var email = iv('if_email') || (currentUser ? currentUser.email : '') || '';
  log('Step 3: email = ' + email);

  if (!email) {
    log('ERROR: no email — aborting');
    if (btn) { btn.disabled = false; btn.textContent = 'Submit and Enter App →'; }
    return;
  }

  // Build/update currentUser
  if (!currentUser) {
    currentUser = {
      email: email,
      first_name: iv('if_first') || email.split('@')[0],
      last_name:  iv('if_last')  || '',
      role: 'client',
      client_type: intakeChipVals['client_type'] || 'in_person',
      sex: intakeSex,
      intake_complete: true,
      is_active: true,
      current_week: 1,
      current_phase: 'The Forge'
    };
    currentRole = 'client';
  } else {
    currentUser.intake_complete = true;
    currentUser.sex = intakeSex;
    currentUser.client_type = intakeChipVals['client_type'] || 'in_person';
  }
  saveSession();
  log('Step 4: session saved');

  try {
    // Measurements
    var measurementLabels = ['chest','waist','hips','left_arm','right_arm','left_thigh','right_thigh','neck'];
    var measurements = {};
    measurementLabels.forEach(function(label, i) {
      var val = parseFloat(document.getElementById('if_m_' + i) ? document.getElementById('if_m_' + i).value : '');
      if (val) measurements[label + '_cm'] = val;
    });

    var baselineData = {
      email: email,
      first_name:       iv('if_first'),
      last_name:        iv('if_last'),
      sex:              intakeSex,
      weight_kg:        parseFloat(iv('if_weight')) || null,
      height_cm:        parseFloat(iv('if_height_cm')) || null,
      body_fat_pct:     parseFloat(iv('if_bf')) || null,
      programme_goal:   intakeRadioVals['goal'] || '',
      experience:       intakeRadioVals['experience'] || '',
      activity_level:   intakeRadioVals['activity'] || '',
      client_type:      intakeChipVals['client_type'] || 'in_person',
      injuries:         iv('if_injuries'),
      why:              iv('if_why'),
      notes:            iv('if_notes') || iv('if_final_notes') || '',
      submitted_at:     new Date().toISOString()
    };
    Object.assign(baselineData, measurements);

    log('Step 5: saving to client_baselines...');
    var blRes = await fetch(SB_URL + '/rest/v1/client_baselines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(baselineData)
    });
    log('Step 6: baseline status = ' + blRes.status);

    log('Step 7: patching platform_users...');
    var patchRes = await fetch(SB_URL + '/rest/v1/platform_users?email=eq.' + encodeURIComponent(email), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        intake_complete: true,
        sex: intakeSex,
        client_type: intakeChipVals['client_type'] || 'in_person'
      })
    });
    log('Step 8: patch status = ' + patchRes.status);

    // GHL webhook — fire and forget
    fetch('https://services.leadconnectorhq.com/hooks/joReyyNlTbY9adnjCSpY/webhook-trigger/fc04e247-953c-4842-a223-77c32f571441', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, type: 'intake_form', intake_complete: true })
    }).catch(function() {});

    log('Step 9: launching app...');

    // Hide gate
    var gate = document.getElementById('intake-gate');
    if (gate) gate.style.display = 'none';
    log('Step 10: gate hidden = ' + !!gate);

    // Show app
    var authEl = document.getElementById('auth-screen');
    var appEl  = document.getElementById('app-shell');
    log('Step 11: auth-screen=' + !!authEl + ' app-shell=' + !!appEl);
    if (authEl) authEl.classList.add('hidden');
    if (appEl)  appEl.classList.remove('hidden');

    // Topbar
    var nameStr = currentUser.first_name || email.split('@')[0];
    var tu = document.getElementById('topbar-user');
    var ta = document.getElementById('topbar-avatar');
    log('Step 12: topbar-user=' + !!tu + ' topbar-avatar=' + !!ta);
    if (tu) tu.textContent = nameStr;
    if (ta) ta.textContent = nameStr[0].toUpperCase();

    // Client UI
    var cs = document.getElementById('coach-screens');
    var cl = document.getElementById('client-screens');
    var cn = document.getElementById('coach-nav');
    var cv = document.getElementById('client-nav');
    log('Step 13: client-screens=' + !!cl + ' client-nav=' + !!cv);
    if (cs) cs.style.display = 'none';
    if (cl) cl.style.display = 'block';
    if (cn) cn.style.display = 'none';
    if (cv) cv.style.display = 'flex';

    log('Step 14: calling loadClientHome...');
    try {
      await loadClientHome();
      log('Step 15: loadClientHome done');
    } catch(homeErr) {
      log('loadClientHome ERROR: ' + homeErr.message);
    }

  } catch(e) {
    log('CATCH: ' + e.message);
    if (btn) { btn.disabled = false; btn.textContent = 'Submit and Enter App →'; }
  }
}


async function checkIntakeGate() {
  const email = currentUser?.email;
  if (!email) return false;

  // Check if intake already complete (from session cache first)
  if (currentUser.intake_complete) return false;

  // Check Supabase
  try {
    const rows = await sbGet(`platform_users?email=eq.${encodeURIComponent(email)}&select=intake_complete,sex,client_type,life_stage,cycle_length`);
    if (rows.length && rows[0].intake_complete) {
      // Update local user cache
      currentUser.intake_complete = true;
      currentUser.sex = rows[0].sex;
      currentUser.client_type = rows[0].client_type;
      saveSession();
      return false; // No gate needed
    }
  } catch(_) {}

  // Show intake gate
  const gate = document.getElementById('intake-gate');
  if (gate) {
    gate.style.display = 'block';
    // Pre-fill email from currentUser
    const emailEl = document.getElementById('if_email');
    const firstEl = document.getElementById('if_first');
    const lastEl  = document.getElementById('if_last');
    if (emailEl && currentUser.email) emailEl.value = currentUser.email;
    if (firstEl && currentUser.first_name) firstEl.value = currentUser.first_name;
    if (lastEl  && currentUser.last_name)  lastEl.value  = currentUser.last_name;
    updateIntakeProgress();
  }
  return true; // Gate is showing
}

// ── WAITLIST EXPERIENCE ──────────────────────────────────────────────────────
function initWaitlistExperience() {
  // Show client nav but hide most screens
  document.getElementById('client-nav').style.display = 'flex';
  document.getElementById('client-screens').style.display = 'block';

  // Show only waitlist-accessible tabs
  const nav = document.getElementById('client-nav');
  nav.innerHTML = `
    <div class="nav-tab active" onclick="clientNav('home',this)">
      <div class="nav-icon">🏠</div><div class="nav-label">Home</div>
    </div>
    <div class="nav-tab" onclick="clientNav('nutrition',this)">
      <div class="nav-icon">🥗</div><div class="nav-label">Nutrition</div>
    </div>
    <div class="nav-tab" onclick="clientNav('brotherhood',this)">
      <div class="nav-icon">🛡️</div><div class="nav-label">Brotherhood</div>
    </div>`;

  loadWaitlistHome();
}

function loadWaitlistHome() {
  const name = currentUser?.first_name || 'Warrior';
  const homeEl = document.getElementById('screen-home');
  if (!homeEl) return;

  homeEl.style.display = 'block';
  homeEl.classList.add('active');

  homeEl.innerHTML = `
    <div style="background:linear-gradient(135deg,#0A0000,#1A0500);border-bottom:1px solid rgba(201,168,76,.2);padding:20px 16px">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:4px">Spartan Waitlist</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;color:#fff;margin-bottom:4px">Welcome, ${name}</div>
      <div style="font-size:12px;color:var(--al);line-height:1.6">You are on the waitlist for the next Spartan16 cohort. Your access is active below.</div>
    </div>

    <div style="padding:16px">
      <div class="card" style="padding:14px 16px;margin-bottom:12px;border-color:rgba(201,168,76,.3);background:linear-gradient(135deg,rgba(139,0,0,.08),var(--cs))">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:1px;color:var(--gold);margin-bottom:10px">Your Waitlist Access</div>
        ${[
          ['🥗', 'Calorie Calculator', 'Calculate your targets and generate a 7-day meal plan', 'nutrition'],
          ['📖', 'Knowledge Base', 'Access all evergreen coaching articles from Mike', 'progress'],
          ['🛡️', 'Brotherhood', 'See the community — you can post when you join a cohort', 'brotherhood'],
        ].map(([icon,title,sub,tab]) => `
          <div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid rgba(42,42,42,.4);cursor:pointer"
            onclick="document.querySelector('[onclick*=clientNav\'${tab}\']')?.click()">
            <div style="font-size:20px;flex-shrink:0">${icon}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500;color:#fff;margin-bottom:2px">${title}</div>
              <div style="font-size:11px;color:var(--ash)">${sub}</div>
            </div>
            <div style="color:var(--gold);font-size:14px">→</div>
          </div>`).join('')}
        <div style="display:flex;align-items:center;gap:12px;padding:9px 0;opacity:.4;cursor:not-allowed">
          <div style="font-size:20px;flex-shrink:0">🔒</div>
          <div>
            <div style="font-size:13px;font-weight:500;color:#fff;margin-bottom:2px">Session Logging, Fitness Testing + More</div>
            <div style="font-size:11px;color:var(--ash)">Unlocks when you join a cohort</div>
          </div>
        </div>
      </div>

      <div class="card" style="padding:14px 16px;margin-bottom:12px">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:1px;color:#fff;margin-bottom:8px">Next Cohort</div>
        <div style="font-size:12px;color:var(--al);line-height:1.7;margin-bottom:12px">
          When the next cohort opens you will be contacted before any public announcement.
          Cohorts typically run 3-4 times per year and fill within 48 hours of announcement.
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div style="text-align:center;background:#111;border-radius:6px;padding:10px">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold)">£600</div>
            <div style="font-size:10px;color:var(--ash);text-transform:uppercase;letter-spacing:1px">Pay in Full</div>
          </div>
          <div style="text-align:center;background:#111;border-radius:6px;padding:10px">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold)">£175</div>
            <div style="font-size:10px;color:var(--ash);text-transform:uppercase;letter-spacing:1px">× 4 months</div>
          </div>
        </div>
      </div>

      <div id="kb-weekly-card"></div>
    </div>`;

  // Load an evergreen KB article for waitlist members
  const evArticles = KB_ARTICLES ? KB_ARTICLES.filter(a => a.week === 0) : [];
  const article = evArticles[Math.floor(Math.random() * evArticles.length)];
  if (article) {
    const kbEl = document.getElementById('kb-weekly-card');
    if (kbEl) {
      kbEl.innerHTML = `
        <div class="kb-card" onclick="openKbArticle('${article.id}')">
          <div class="kb-card-eyebrow">📖 From the Knowledge Base</div>
          <div class="kb-card-title">${article.icon} ${article.title}</div>
          <div class="kb-card-preview">${article.preview}</div>
          <div class="kb-card-footer">
            <div class="kb-read-time">${article.readTime} read</div>
            <div class="kb-arrow">→</div>
          </div>
        </div>`;
    }
  }
}

// Override Brotherhood for waitlist — read only, no input bar
function loadBrotherhoodWaitlist() {
  const inputBar = document.querySelector('.bh-input-bar');
  const imgPreview = document.getElementById('bh-img-preview');
  if (inputBar) {
    inputBar.innerHTML = `
      <div style="width:100%;text-align:center;padding:10px;font-size:12px;color:var(--ash);font-family:'Barlow',sans-serif">
        🛡️ Join a cohort to post in the Brotherhood
      </div>`;
  }
  if (imgPreview) imgPreview.style.display = 'none';
  fetchBhMessages();
}

// ── SPARTAN ALUMNI ───────────────────────────────────────────────────────────
function toggleAmDay(id) {
  const body = document.getElementById(id);
  const chev = document.getElementById('am-chev-' + id.replace('am-',''));
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (chev) chev.textContent = open ? '▾' : '▸';
}

function checkAlumniStatus(week, clientType) {
  // Only show for online clients at Week 16+
  if (clientType !== 'online') return;
  if (week < 16) return;

  // Add Alumni tab to nav if not already there
  if (!document.getElementById('alumni-tab')) {
    const nav = document.getElementById('client-nav');
    if (!nav) return;
    const tab = document.createElement('div');
    tab.className = 'nav-tab';
    tab.id = 'alumni-tab';
    tab.innerHTML = '<div class="nav-icon">🏆</div><div class="nav-label">Alumni</div>';
    tab.onclick = function() { clientNav('alumni', this); };
    nav.appendChild(tab);
  }
}

// ── KNOWLEDGE BASE ───────────────────────────────────────────────────────────
const KB_ARTICLES = [
  // ── PHASE 1: THE FORGE ───────────────────────────────────────────────────
  {
    id: 'w1', week: 1, phase: 'The Forge', icon: '⚔️',
    title: 'Why the 300 Test Matters',
    preview: 'Your baseline time is not a judgment. It is the starting line. Here is what it actually tells you.',
    readTime: '3 min',
    body: `<p>Most people hate the 300 Test. They do it on Week 1 when they are out of shape, unfamiliar with the movements, and have no idea what their body is capable of. They get a time that feels embarrassing. They want to forget it.</p>
<p><strong>Do not forget it. That number is one of the most valuable things in your programme.</strong></p>
<h3>What It Measures</h3>
<p>The 300 Test is not a strength test. It is not a cardio test. It is a metabolic conditioning test — it measures your body's ability to sustain output across 300 reps of varied movements under fatigue. It captures cardiovascular fitness, muscular endurance, mental resilience and pacing ability all in one number.</p>
<p>That is why it is the benchmark. It cannot be gamed by being strong in one area. You have to be complete.</p>
<h3>What Your Time Actually Tells You</h3>
<p>Your Week 1 time tells you where your baseline metabolic conditioning is right now. Not where it was five years ago. Not where it should be. Where it is today.</p>
<p>In 4 weeks you will test again. In 8 weeks again. In 15 weeks one final time. The progression of those four numbers is your transformation story told in data.</p>
<ul>
<li>A 5-minute improvement is significant</li>
<li>A 10-minute improvement is exceptional</li>
<li>A 15-minute improvement across 16 weeks means you rebuilt your engine from the ground up</li>
</ul>
<h3>The One Rule</h3>
<p>Record it honestly. Do not stop the clock while you rest. Do not skip movements. The number only means something if it is real.</p>
<p>Write it down. Take a photo of the stopwatch. You will want to compare it to Week 15.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w2', week: 2, phase: 'The Forge', icon: '📈',
    title: 'Progressive Overload — Why the Plan Is Built the Way It Is',
    preview: 'The programme is not random. Every load, every rep range, every session type is there for a reason.',
    readTime: '4 min',
    body: `<p>People look at a training programme and think it is a list of exercises. It is not. It is a stimulus schedule — a deliberate sequence of stresses designed to force specific adaptations over time.</p>
<p>Understanding this changes how you train.</p>
<h3>The Principle</h3>
<p><strong>Progressive overload</strong> is the single most important concept in strength and conditioning. It means systematically increasing the demand placed on your body over time so it is forced to adapt and become stronger, fitter and more capable.</p>
<p>Your body is extraordinarily good at adapting to whatever you do to it. Do the same thing week after week and it stops adapting. It has already built the capacity to handle that stress — adding more of it produces no further change.</p>
<p>This is why people train for years and look exactly the same. They are not getting worse. They have just stopped getting better.</p>
<h3>How Spartan16 Applies It</h3>
<p>The 16 weeks are divided into four phases specifically to build on each other:</p>
<ul>
<li><strong>The Forge</strong> — movement quality and baseline conditioning at 65–75% of your max</li>
<li><strong>Armour</strong> — volume peaks, loads increase to 75–85%</li>
<li><strong>War</strong> — intensity peaks, volume drops, loads hit 85–92%</li>
<li><strong>Legacy</strong> — peak expression and taper, loads at 90–95%</li>
</ul>
<p>Each phase builds the foundation for the next. You cannot safely or effectively train at 90% in Week 1. Your tendons, joints and neuromuscular system need the preceding 12 weeks to prepare for that stimulus.</p>
<h3>What This Means for You</h3>
<p>Trust the loads. If the programme says 65%, train at 65%. Not 80% because you feel good. Not 50% because you are tired. The percentages are calculated. Jumping ahead costs you the adaptation you were supposed to build that week.</p>
<p>The progress is in the programme. Follow it.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w3', week: 3, phase: 'The Forge', icon: '😴',
    title: 'Sleep Is the Training Session You Are Not Counting',
    preview: 'You can do everything else right and still not progress if your sleep is wrong. Here is the science.',
    readTime: '4 min',
    body: `<p>There is a reason every elite athlete prioritises sleep above almost everything else. It is not comfort. It is performance. And most people training hard are systematically destroying their results by sleeping badly.</p>
<h3>What Happens When You Sleep</h3>
<p>Training does not build muscle. It breaks it down. Sleep builds it back — bigger, stronger and more resilient than before. Every adaptation from every session in this programme happens during sleep, not during the session itself.</p>
<p>Specifically:</p>
<ul>
<li>Growth hormone release peaks in the first 90 minutes of deep sleep</li>
<li>Muscle protein synthesis rates are highest during sleep</li>
<li>Cortisol (the stress hormone that breaks down muscle) is cleared during sleep</li>
<li>Neuromuscular patterns from training are consolidated during REM sleep</li>
</ul>
<p>Skip or shorten sleep and you skip the adaptation. You did the work. You did not collect the reward.</p>
<h3>The Testosterone Connection</h3>
<p>One week of sleeping under 6 hours reduces testosterone by up to 15% in trained men. Testosterone is the primary driver of muscle building and recovery. You cannot supplement your way around a sleep deficit.</p>
<h3>The Practical Standard</h3>
<p><strong>7–9 hours. Non-negotiable.</strong></p>
<p>Consistent sleep and wake times matter as much as duration. Your body runs on a circadian rhythm — disrupting it disrupts everything downstream.</p>
<ul>
<li>Same bedtime within 30 minutes every night</li>
<li>Dark, cool room — 17–19 degrees Celsius is optimal</li>
<li>No screens 30–60 minutes before bed — blue light suppresses melatonin</li>
<li>No alcohol — it fragments sleep architecture even if you fall asleep faster</li>
<li>Magnesium glycinate 400mg before bed — the most effective sleep supplement available</li>
</ul>
<p>Fix your sleep and your training results will improve without changing a single session.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w4', week: 4, phase: 'The Forge', icon: '🔬',
    title: 'Four Weeks In — What Is Actually Happening Inside Your Body',
    preview: 'The scale might not have moved much. Your body has changed more than you think.',
    readTime: '3 min',
    body: `<p>After four weeks of training most people feel fitter but do not look dramatically different. They wonder if it is working. It is. The changes happening inside your body right now are significant — they are just not visible yet.</p>
<h3>What Has Changed</h3>
<p><strong>Neuromuscular efficiency</strong> — the biggest gains in the first 4 weeks are not from muscle growth. They are from your nervous system learning to recruit muscle fibres more efficiently. You are getting stronger without getting bigger. This is why your lifts have improved faster than your physique has changed.</p>
<p><strong>Connective tissue adaptation</strong> — tendons, ligaments and joint capsules are adapting to loading. This is slower than muscle adaptation and is exactly why the early weeks use conservative loads. Connective tissue injury is the number one reason people drop out of training programmes. We build it properly.</p>
<p><strong>Cardiovascular adaptation</strong> — stroke volume (how much blood your heart pumps per beat) is increasing. Your heart is becoming more efficient. Resting heart rate is likely dropping slightly.</p>
<p><strong>Mitochondrial density</strong> — the energy-producing organelles in your muscle cells are increasing in number and efficiency. You will feel this as improved endurance and reduced fatigue during sessions.</p>
<h3>Why the Scale Lies</h3>
<p>If you are building muscle and losing fat simultaneously — which is entirely possible in the first months of training — the scale may not move at all while your body composition is dramatically changing.</p>
<p>Measure circumferences. Take photos. These tell the real story.</p>
<p>You are four weeks in. The foundation is built. Now we build the structure.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  // ── PHASE 2: ARMOUR ───────────────────────────────────────────────────────
  {
    id: 'w5', week: 5, phase: 'Armour', icon: '🛡️',
    title: 'Why Loads Go Up Now',
    preview: 'Welcome to Armour. The loads increase and the volume peaks. Here is why this phase is the engine room of the programme.',
    readTime: '3 min',
    body: `<p>You just completed The Forge. Four weeks of foundation work — movement quality, connective tissue preparation, neuromuscular adaptation. Your body is ready for what comes next.</p>
<p>Armour is where the real building happens.</p>
<h3>What Changes</h3>
<p>Loads move from 65–75% to 75–85% of your estimated one-rep max. This is the hypertrophy zone — the loading range with the strongest evidence for muscle growth. Sets per exercise increase from 3 to 4. Total weekly volume peaks in this phase.</p>
<p>This is deliberately the highest-volume phase of the programme. More total work at heavier loads creates the mechanical tension and metabolic stress that drives muscle adaptation.</p>
<h3>Why It Feels Harder</h3>
<p>Because it is harder. That is the point.</p>
<p>Perceived difficulty is a feature not a bug. If the sessions did not feel more challenging than Forge, the stimulus would not be different enough to force new adaptation.</p>
<p>Recovery becomes more important in Armour. Prioritise sleep, hit your protein target every day, and do not shortchange your rest periods between sets. The programme has built-in recovery — trust it.</p>
<h3>The Recalculation</h3>
<p>Your 1RM estimates from Week 1 may be conservative by now. If your lifts have increased significantly, recalculate your targets using the Nutrition tab calculator. Training at 75% of an outdated 1RM means you are actually training at a lower intensity than prescribed.</p>
<p>The programme only works if the percentages are accurate.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w6', week: 6, phase: 'Armour', icon: '🥩',
    title: 'Protein — The One Nutrition Variable That Matters Most',
    preview: 'You can debate carbs and fats all day. Protein is not a debate. Here is why it is non-negotiable.',
    readTime: '4 min',
    body: `<p>Nutrition advice is full of contradictions. Low carb versus high carb. Fasted versus fed training. Meal frequency. Intermittent fasting. The arguments never end.</p>
<p>Protein is not one of those arguments. The evidence is overwhelming and consistent across decades of research: adequate protein intake is the single most important nutritional variable for body composition change.</p>
<h3>What Protein Does</h3>
<p><strong>Muscle protein synthesis (MPS)</strong> is the process by which your body repairs and builds muscle tissue after training. It requires amino acids — the building blocks of protein — to be available in sufficient quantity.</p>
<p>Without adequate protein, training breaks down muscle. With adequate protein, training builds it. This is not a subtle difference. It is the difference between the programme working and not working.</p>
<h3>The Target</h3>
<p>Your calorie calculator has set your protein target. For most clients in the programme this is 1.6–2.0g per kilogram of bodyweight per day.</p>
<p>This is non-negotiable. Hit it every day. Not most days. Every day.</p>
<ul>
<li>Missing protein on training days reduces muscle protein synthesis for that training session</li>
<li>Missing protein on rest days reduces overnight recovery</li>
<li>Consistently under-eating protein accumulates into meaningfully less muscle gained over 16 weeks</li>
</ul>
<h3>Practical Application</h3>
<p>Spread your protein across 3–5 meals. MPS is stimulated best by hitting 30–40g of protein per meal rather than front or back-loading your intake.</p>
<p>Prioritise complete proteins — animal sources contain all essential amino acids in the right ratios. If you are vegetarian, combine sources to cover your amino acid profile.</p>
<p>If you cannot hit your target from food alone, a protein shake is a legitimate and effective tool. It is a food supplement, not a magic potion and not a shortcut.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w7', week: 7, phase: 'Armour', icon: '💪',
    title: 'The Mid-Programme Slump — Why It Happens and How to Push Through',
    preview: 'Week 7 is where most people start to wobble. Here is why that is normal and what to do about it.',
    readTime: '3 min',
    body: `<p>Week 7. You are past the excitement of starting. The finish line is not close enough to motivate you. The sessions are hard and the novelty has worn off. Your check-in score might be dipping. You might be questioning whether it is worth it.</p>
<p>This is completely normal. It is called the mid-programme slump and almost everyone hits it.</p>
<h3>Why It Happens</h3>
<p>The initial motivation of starting something new has a biological component. Novelty activates dopamine pathways — the brain's reward system fires when you start a new challenge. That neurological boost fades as the programme becomes routine.</p>
<p>Simultaneously, cumulative fatigue from six weeks of progressive loading is real. You are more tired than week one. Your muscles are working harder than they ever have. Your body wants to rest.</p>
<p>This is not a sign that something is wrong. It is a sign the programme is doing exactly what it should.</p>
<h3>What to Do</h3>
<p><strong>Do not skip sessions.</strong> Consistency through discomfort is the entire point. The people who transform in 16 weeks are not the ones who never struggled. They are the ones who showed up anyway.</p>
<p><strong>Reconnect with your reason.</strong> Why did you start this? Write it down if you need to. The goal that got you through the door is still valid.</p>
<p><strong>Focus on the next session only.</strong> Not Week 16. Not the 300 Test retest. Just the next session.</p>
<p><strong>Tell someone you are struggling.</strong> Post in the Brotherhood. Message Mike. Silence makes the slump worse. Naming it usually shrinks it.</p>
<p>Week 8 is one week away. One week. And it brings the first major retest. Finish the phase.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w8', week: 8, phase: 'Armour', icon: '⏱️',
    title: 'Your 300 Test Retest — How to Approach It Mentally',
    preview: 'This is not just a fitness test. It is evidence. Here is how to run it for your best time.',
    readTime: '3 min',
    body: `<p>Eight weeks ago you ran the 300 Test cold, unfamiliar and at the start of a programme you had not yet committed to finishing. The time you got was your Week 1 baseline.</p>
<p>Tomorrow you run it as a different person.</p>
<h3>What Has Changed</h3>
<p>Eight weeks of progressive training has done the following:</p>
<ul>
<li>Your neuromuscular efficiency has increased significantly — the same movements cost less energy</li>
<li>Your cardiovascular capacity has improved — stroke volume is higher, heart rate recovery is faster</li>
<li>Your connective tissue is stronger and better prepared for high-rep work</li>
<li>Your familiarity with the movements means you waste less energy on technique under fatigue</li>
</ul>
<p>You will be faster. The question is by how much.</p>
<h3>How to Run It</h3>
<p><strong>Pace the first three movements.</strong> The most common mistake is going out too hard and collapsing in the back half. The 300 Test is not a sprint. It is a managed effort across 300 reps.</p>
<p><strong>Do not stop the clock.</strong> Rest when you need to but keep the timer running. The number needs to be honest.</p>
<p><strong>Remember your Week 1 splits if you recorded them.</strong> Use them as a pacing guide — aim to match or slightly exceed each movement's time.</p>
<h3>The Mindset</h3>
<p>Whatever time you get today is not your limit. It is your Week 8 benchmark. There are seven more weeks and one more retest. The trend matters more than any single number.</p>
<p>Run hard. Record it honestly. Be proud of whatever improvement you have made.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  // ── PHASE 3: WAR ──────────────────────────────────────────────────────────
  {
    id: 'w9', week: 9, phase: 'War', icon: '⚡',
    title: 'Peak Loading — What Your Body Is Doing at 88–92%',
    preview: 'The loads are the highest they have ever been. Here is what is happening physiologically and why this phase builds your best results.',
    readTime: '3 min',
    body: `<p>Welcome to War. You are now training at 88–92% of your estimated one-rep maximum. This is territory most recreational gym-goers never reach. It is also where the most significant strength and neural adaptations happen.</p>
<h3>Why Heavy Loads Do Something Different</h3>
<p>At lower percentages — 65–80% — your body can get away with recruiting a portion of available muscle fibres. At 88–92%, your nervous system is forced to recruit virtually all available motor units simultaneously.</p>
<p>This maximum motor unit recruitment is what builds absolute strength. It also creates a neuromuscular adaptation that carries over to everything else — you become more powerful at all loads, not just heavy ones.</p>
<h3>Volume Drops for a Reason</h3>
<p>You will notice sets per exercise have reduced compared to Armour. This is deliberate. You cannot sustain Armour-level volume at War-level intensity — the recovery demand would exceed what is possible and you would break down rather than adapt.</p>
<p>Lower volume at higher intensity is a different stimulus. Both are necessary. Both produce different adaptations. This is why the phases exist.</p>
<h3>What to Watch For</h3>
<p>Joint health needs attention at this intensity. Warm up thoroughly — more than you think you need. Do not skip the mobility work. The higher the load, the more catastrophic an injury becomes.</p>
<p>If something hurts sharply, stop. Soreness is acceptable. Sharp joint pain is not. There is a difference and you know it.</p>
<p>Train heavy. Train smart. This phase is where the transformation accelerates.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w10', week: 10, phase: 'War', icon: '🧠',
    title: 'Cortisol, Stress and Training — The Triangle That Makes or Breaks Results',
    preview: 'Life stress and training stress come from the same pool. Here is what that means for your results.',
    readTime: '4 min',
    body: `<p>Your body does not distinguish between the stress of a heavy squat and the stress of a difficult week at work. Both elevate cortisol. Both draw from the same recovery resources. Both compete for the same adaptation capacity.</p>
<p>This is why two people can follow the same programme with completely different results.</p>
<h3>What Cortisol Does</h3>
<p>Cortisol is a catabolic hormone — it breaks things down. In the short term during training, this is useful. It mobilises energy, sharpens focus and enables high performance.</p>
<p>Chronically elevated cortisol is the opposite of useful:</p>
<ul>
<li>It suppresses testosterone directly</li>
<li>It increases muscle protein breakdown</li>
<li>It impairs sleep quality</li>
<li>It increases fat storage, particularly visceral abdominal fat</li>
<li>It reduces immune function and increases injury risk</li>
</ul>
<h3>The Recovery Pool</h3>
<p>Think of recovery capacity as a pool. Every training session draws from it. Every stressful day draws from it. Sleep, nutrition and rest refill it.</p>
<p>If life is exceptionally stressful — a difficult period at work, relationship problems, financial pressure — your recovery pool is already depleted before you add training to it. The same session that would have produced adaptation in a calm week now produces breakdown.</p>
<h3>What to Do About It</h3>
<p>You cannot always control life stress. You can manage it:</p>
<ul>
<li>Reduce training volume slightly in genuinely high-stress weeks — 80% of the session is better than pushing through at 100% and not recovering</li>
<li>Prioritise sleep above all else during high-stress periods</li>
<li>Ashwagandha (KSM-66) at 600mg daily has clinical evidence for cortisol reduction of up to 30%</li>
<li>Communicate in your check-in — your coaching plan adjusts based on what you tell me</li>
</ul>
<p>The check-in is not just data collection. It is how I know when to push you and when to pull back.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w11', week: 11, phase: 'War', icon: '📊',
    title: 'Body Composition Truth — Why the Scale Lies',
    preview: 'The scale is the worst tool for measuring progress. Here is what to measure instead.',
    readTime: '3 min',
    body: `<p>If you have been weighing yourself throughout this programme, you have probably noticed the number moving in ways that do not match how you look and feel. This is not a coincidence. The scale is genuinely a poor tool for measuring body composition change.</p>
<h3>What the Scale Actually Measures</h3>
<p>Your weight at any given moment is the combined mass of muscle, fat, bone, organs, water, food in your digestive system and glycogen stored in your muscles and liver.</p>
<p>Of those components, only muscle and fat are what we are trying to change. The others fluctuate constantly and independently of your actual progress.</p>
<ul>
<li>Glycogen binds water — a high-carbohydrate day adds 1–3kg on the scale overnight</li>
<li>Sodium causes water retention — a salty meal can add 1–2kg</li>
<li>Hormonal fluctuations cause significant water retention (particularly for women in the luteal phase)</li>
<li>Inflammation from hard training temporarily increases water weight</li>
</ul>
<h3>What to Measure Instead</h3>
<p><strong>Circumferences</strong> — your weekly check-in captures seven measurements. These tell the real story. Waist going down while chest and shoulders stay the same or increase is exactly what you want.</p>
<p><strong>Strength numbers</strong> — are you lifting more than you were 8 weeks ago? That is muscle.</p>
<p><strong>The 300 Test</strong> — your retest time is the most objective performance measure in the programme.</p>
<p><strong>Photos</strong> — taken in the same conditions, same lighting, same time of day. The camera does not lie the way your head does.</p>
<p>Weigh yourself weekly at most, always at the same time of day, and judge trends over 4-week periods. Ignore day-to-day fluctuations entirely.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w12', week: 12, phase: 'War', icon: '🔥',
    title: 'Three Weeks to Go — What Legacy Demands',
    preview: 'You are about to enter the final phase. Here is what it asks of you and why it is worth it.',
    readTime: '3 min',
    body: `<p>Twelve weeks done. The hardest phases of the programme are behind you. What comes next is different.</p>
<p>Legacy is not about building more. It is about expressing everything you have built.</p>
<h3>What Changes in Legacy</h3>
<p>Loads stay at 90–95% — the highest of any phase. Volume drops further. The sessions are shorter but the intensity is uncompromising.</p>
<p>This is periodisation completing its cycle. You have done the volume work in Armour. You have done the intensity work in War. Legacy combines near-maximal loads with just enough volume to keep you sharp without accumulating fatigue before the final retest.</p>
<h3>The Photoshoot</h3>
<p>Week 16 ends with a cohort photoshoot. This is not vanity — it is documentation. The photos capture what 16 weeks of consistent work produces. They are also the most compelling marketing asset for the next cohort, and your proof for yourself that you did what you said you would do.</p>
<p>The final 10 days include a photoshoot peak protocol if you choose to use it — the calculator in the Nutrition tab has a Photoshoot Peak option that walks you through the water and carbohydrate manipulation to look your absolute best on the day.</p>
<h3>What Legacy Asks</h3>
<p>Consistency for three more weeks. Do not coast because you can see the finish line. Do not over-train because you want to squeeze more in. Follow the plan exactly as written.</p>
<p>The programme was designed to peak you at Week 16. Trust it to do that.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  // ── PHASE 4: LEGACY ───────────────────────────────────────────────────────
  {
    id: 'w13', week: 13, phase: 'Legacy', icon: '🏆',
    title: 'The Taper — Why Less Volume Does Not Mean Less Results',
    preview: 'The volume drops in Legacy. This is deliberate and it is why you will peak at Week 16.',
    readTime: '3 min',
    body: `<p>If you are following the programme properly, Week 13 feels lighter than Weeks 9–12. Fewer sets. Slightly shorter sessions. And you might be worried that you are losing fitness.</p>
<p>You are not. You are peaking.</p>
<h3>What Tapering Does</h3>
<p>After 12 weeks of progressive loading, your body carries significant accumulated fatigue. This fatigue masks your actual fitness level — you are fitter than you feel because the fatigue is sitting on top of the fitness.</p>
<p>A taper removes the fatigue while the fitness remains. The result is that your actual capability surfaces for the first time. Athletes routinely hit personal bests in the week or two after a taper simply because the fatigue is no longer suppressing what their body can actually do.</p>
<h3>Why the Loads Stay High</h3>
<p>Volume drops but intensity does not. This is the key distinction. Low-intensity tapering causes detraining. High-intensity, reduced-volume tapering maintains every adaptation while allowing recovery from the cumulative fatigue.</p>
<p>The loads you are lifting now — 90–95% — are the highest of the programme. The sessions just do not have as many of them.</p>
<h3>Trust the Process</h3>
<p>Do not add extra work because you feel good. Do not extend sessions because they feel shorter. The taper is calibrated. Interfering with it interferes with your Week 16 peak.</p>
<p>Feel good. Recover. Prepare to express what 13 weeks of work has built.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w14', week: 14, phase: 'Legacy', icon: '📸',
    title: 'The Photoshoot Prep Mindset',
    preview: 'What peak condition actually looks like — and how to approach the final two weeks with the right perspective.',
    readTime: '3 min',
    body: `<p>Two weeks from now you will be photographed at what should be your peak physical condition in recent memory. Here is how to think about that.</p>
<h3>What the Photos Are For</h3>
<p>The photoshoot is documentation, not judgment. These photos exist to show you and the people around you what 16 weeks of consistent work produces. They are your before-and-after. They are your proof.</p>
<p>They are also the primary evidence for the next cohort — the most powerful thing you can show someone considering this programme is what a real person who actually did it looks like at the end.</p>
<h3>What Peak Condition Actually Looks Like</h3>
<p>You will look better than you normally do at the shoot — the 10-day photoshoot peak protocol in the Nutrition tab handles water and carbohydrate manipulation to help your musculature show more clearly.</p>
<p>But peak condition for the photoshoot is not the same as the cover of a fitness magazine. Models shoot after months of extreme preparation. You have done 16 weeks of real training alongside a real life. Your result is real. That is actually more impressive.</p>
<h3>The Right Perspective</h3>
<p>Compare yourself only to Week 1 you. That is the only fair comparison and it is the only one that matters. Whatever your Week 16 body looks like compared to Week 1 is the story of what this programme did.</p>
<p>Approach the shoot with confidence. You earned the right to be photographed.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w15', week: 15, phase: 'Legacy', icon: '⏱️',
    title: 'Final 300 Test — How to Run It for Your Best Time',
    preview: 'One more 300 Test. Here is everything you need to run your fastest time.',
    readTime: '3 min',
    body: `<p>Monday of Week 15 is your final 300 Test. This is the number you have been working toward since Week 1. Here is how to approach it for your absolute best performance.</p>
<h3>The Day Before</h3>
<p>Sleep is the most important preparation. Aim for 8+ hours. Eat your normal amount with a slight emphasis on carbohydrates — glycogen stores being full makes a meaningful difference to high-rep endurance performance.</p>
<p>Do not train the day before. The rest is part of the preparation.</p>
<h3>Morning of the Test</h3>
<p>Eat a moderate meal 2–3 hours before. Something you have eaten before a session previously — not something new. A small amount of caffeine if you normally use it. Stay well hydrated but do not over-drink.</p>
<p>Warm up properly. More than you think you need. The 300 Test demands immediate output — going in cold will cost you time on the first movement.</p>
<h3>Pacing Strategy</h3>
<p>The biggest mistake people make is going out too fast. The first movement feels easy. The second starts to sting. By the fourth you are in trouble.</p>
<ul>
<li>Aim for a consistent effort across all movements rather than a sprint-and-survive approach</li>
<li>Rest strategically between movements rather than grinding through failure</li>
<li>Your weakest movement is where you lose the most time — identify it and pace before it</li>
</ul>
<h3>The Mental Game</h3>
<p>When it hurts — and it will hurt — remember that the discomfort is temporary and the time on the clock is permanent. You will feel this effort for 30–40 minutes. You will see the result for the rest of your life.</p>
<p>Run hard. Record it honestly. You have earned this moment.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'w16', week: 16, phase: 'Legacy', icon: '🛡️',
    title: 'What Happens After — How to Keep What You Built',
    preview: '16 weeks complete. Here is the honest guide to keeping your results for the long term.',
    readTime: '4 min',
    body: `<p>You have done it. Sixteen weeks. Whatever your result — and it is better than you think — you have built something real. The question now is how to keep it.</p>
<h3>The Biology of Maintenance</h3>
<p>Muscle is metabolically expensive to maintain. Your body will begin to break it down if you do not continue giving it a reason to keep it. This does not mean you need to keep training at Spartan16 intensity forever — it means you need to keep training.</p>
<p>The good news is that maintenance requires significantly less volume than building. Studies consistently show that training frequency can drop to twice per week and intensity can reduce by 20–30% without meaningful muscle or strength loss. You built it with five sessions per week. You can keep it with two heavy sessions.</p>
<h3>The Detraining Timeline</h3>
<p>For context on what happens if you stop entirely:</p>
<ul>
<li>Cardiovascular fitness begins declining within 2 weeks</li>
<li>Strength begins declining at 2–4 weeks without training</li>
<li>Muscle mass becomes measurably lower at 4–8 weeks</li>
<li>But — and this is important — you come back faster than you built it the first time. Muscle memory is real.</li>
</ul>
<h3>The Practical Plan</h3>
<p>Keep two compound strength sessions per week as a non-negotiable minimum. Keep protein at your target. Keep sleep at 7–9 hours.</p>
<p>Those three things will preserve the vast majority of what you built.</p>
<p>When you are ready for the next cohort, you will not be starting from zero. You will be starting from the best baseline of your life.</p>
<p>The Brotherhood does not end at Week 16. Stay in it.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  // ── EVERGREEN ─────────────────────────────────────────────────────────────
  {
    id: 'ev1', week: 0, phase: 'Evergreen', icon: '📋',
    title: 'How to Read Your Check-In Scores',
    preview: 'Your weekly scores are not just numbers. Here is what they mean and how I use them to coach you.',
    readTime: '2 min',
    body: `<p>Every Sunday you score yourself across five dimensions: overall, training, nutrition, mindset and energy. Here is what those scores are actually for and how I use them.</p>
<h3>What the Scores Mean</h3>
<p><strong>7–10:</strong> You are in a good place. The coaching plan this week focuses on maintaining momentum and adding load where appropriate.</p>
<p><strong>4–6:</strong> Something is holding you back. The coaching plan digs into what and adjusts accordingly.</p>
<p><strong>1–3:</strong> Red flag. I look at these personally and reach out directly. Something significant is happening and it needs attention.</p>
<h3>Be Honest</h3>
<p>The scores are only useful if they are accurate. A 7 when you mean a 4 helps nobody — least of all you. The programme adjusts based on what you tell me. If you tell me everything is fine when it is not, you get generic coaching instead of specific coaching.</p>
<p>There is no judgment in a low score. Life is hard and training is one component of a complicated existence. A 3 week after a 9 week is not failure — it is data.</p>
<h3>Patterns Matter More Than Individual Scores</h3>
<p>One low score is a bad week. Three consecutive low scores is a pattern that needs addressing. I look at trends over time, not individual data points in isolation.</p>
<p>Your check-in history is visible in your Progress tab. Use it to notice your own patterns.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'ev2', week: 0, phase: 'Evergreen', icon: '🛡️',
    title: 'The Brotherhood — How to Use the Community',
    preview: 'The community is one of the most powerful tools in the programme. Here is how to get the most from it.',
    readTime: '2 min',
    body: `<p>Accountability to yourself is good. Accountability to a group is significantly more powerful. The research is consistent: people who train in communities have better adherence, better results and greater long-term retention than people who train alone.</p>
<p>The Brotherhood exists for this reason.</p>
<h3>How to Use It</h3>
<p><strong>Post your wins.</strong> Hit a PB? Post it. Completed a session you almost skipped? Post it. Finished the 300 Test? Post it. Celebration in the group reinforces the behaviour.</p>
<p><strong>Post your struggles.</strong> Having a bad week? Say so. Someone in the group has been through it. Someone will respond. Silence and isolation make difficult periods harder. Naming them in a community makes them smaller.</p>
<p><strong>Respond to others.</strong> The Brotherhood is only as strong as its members. When someone posts, respond. Acknowledge. Celebrate. A single reply from a teammate has more motivational impact than you might expect.</p>
<h3>What I Use It For</h3>
<p>I post training tips, programme updates, motivational content and milestone celebrations here. I also read everything. If you post something that concerns me I will reach out directly.</p>
<p>The Brotherhood tab is your community. Use it.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'ev3', week: 0, phase: 'Evergreen', icon: '🥗',
    title: 'Nutrition Fundamentals — The Spartan Approach',
    preview: 'Before macros and meal plans, these are the fundamentals that underpin everything.',
    readTime: '4 min',
    body: `<p>The Spartan approach to nutrition is not a diet. It is a framework. The goal is not restriction — it is fuelling performance and body composition change through deliberate food choices made consistently over time.</p>
<h3>The Hierarchy</h3>
<p>In order of importance:</p>
<p><strong>1. Calories</strong> — total energy intake determines whether you gain, lose or maintain weight. Nothing else matters if this is wrong.</p>
<p><strong>2. Protein</strong> — the most important macronutrient for body composition. Non-negotiable at your prescribed target.</p>
<p><strong>3. Carbohydrates and Fat</strong> — once protein is hit and calories are appropriate, the split between carbs and fat is a secondary consideration. The calculator sets a 40/35/25 protein/carb/fat split as a starting point. Adjust based on preference and energy levels.</p>
<p><strong>4. Food quality</strong> — whole foods, minimal processing, vegetables, lean proteins, complex carbohydrates. This matters for health, micronutrient intake and satiety — but only after the first three are addressed.</p>
<h3>The Spartan Food List</h3>
<p>The ebook delivered at the start of your programme contains the full Mediterranean-Spartan food list. These are the foods that should make up the majority of your diet — lean proteins, olive oil, vegetables, complex carbohydrates, nuts and fish.</p>
<p>They are foods that worked for one of the most physically capable civilisations in history. They work now.</p>
<h3>The One Rule</h3>
<p>Hit your protein every day. Everything else can flex. Protein cannot.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
  {
    id: 'ev4', week: 0, phase: 'Evergreen', icon: '💤',
    title: 'Recovery — The Fifth Session You Keep Skipping',
    preview: 'Active recovery is not rest. It is training. Here is how to do it properly.',
    readTime: '3 min',
    body: `<p>Most people think recovery means doing nothing. It does not. Passive rest is the minimum recovery strategy. Active recovery is significantly more effective and it is what separates people who adapt quickly from people who plateau.</p>
<h3>What Active Recovery Does</h3>
<p>Active recovery — light movement at low intensity — does several things passive rest does not:</p>
<ul>
<li>Increases blood flow to muscles, accelerating the delivery of nutrients and removal of metabolic waste</li>
<li>Reduces delayed onset muscle soreness (DOMS) by flushing inflammatory markers</li>
<li>Maintains neuromuscular patterns during recovery periods</li>
<li>Supports the lymphatic system which has no pump of its own — it requires movement</li>
</ul>
<h3>What Active Recovery Looks Like</h3>
<p>The key word is light. Active recovery should feel effortless. If it is challenging enough to elevate your heart rate significantly, it is not recovery — it is another training session drawing from your recovery pool.</p>
<ul>
<li>20–30 minute walk at a comfortable pace</li>
<li>15–20 minutes of mobility and stretching</li>
<li>Light swimming</li>
<li>Yoga or Pilates at a restorative level</li>
<li>Foam rolling and soft tissue work</li>
</ul>
<h3>Sunday Is Still Rest</h3>
<p>Sunday is the designated rest day in this programme and it is non-negotiable. Rest is not laziness — it is when your body consolidates the week's adaptations. A 20-minute walk is fine. A full session is not.</p>
<p>Protect your rest day with the same commitment you give your training days.</p>
<div class="kb-mike-sign">— Mike Foster · Spartan16</div>`
  },
];

function getWeeklyArticle(week) {
  // Find the article for this specific week
  const weekArticle = KB_ARTICLES.find(a => a.week === week);
  if (weekArticle) return weekArticle;
  // Fallback to evergreen based on week
  const evergreen = KB_ARTICLES.filter(a => a.week === 0);
  return evergreen[week % evergreen.length] || evergreen[0];
}

function renderKbWeeklyCard(week) {
  const el = document.getElementById('kb-weekly-card');
  if (!el) return;
  const article = getWeeklyArticle(week);
  if (!article) return;

  el.innerHTML = `
    <div class="kb-card" onclick="openKbArticle('${article.id}')">
      <div class="kb-card-eyebrow">📖 This Week — ${article.phase}</div>
      <div class="kb-card-title">${article.icon} ${article.title}</div>
      <div class="kb-card-preview">${article.preview}</div>
      <div class="kb-card-footer">
        <div class="kb-read-time">${article.readTime} read</div>
        <div class="kb-arrow">→</div>
      </div>
    </div>`;
}

function renderKbLibrary(currentWeek) {
  const el = document.getElementById('kb-library');
  if (!el) return;

  const weekly  = KB_ARTICLES.filter(a => a.week > 0).sort((a,b) => a.week - b.week);
  const evergreen = KB_ARTICLES.filter(a => a.week === 0);

  const renderItem = (article) => {
    const locked = article.week > 0 && article.week > currentWeek + 1;
    return `
      <div class="kb-lib-item ${locked ? 'locked' : ''}"
        ${!locked ? `onclick="openKbArticle('${article.id}')"` : ''}>
        <div class="kb-lib-icon">${article.icon}</div>
        <div class="kb-lib-info">
          <div class="kb-lib-title">${article.title}</div>
          <div class="kb-lib-meta">${article.phase} ${article.week > 0 ? '· Week ' + article.week : ''} · ${article.readTime}</div>
        </div>
        <div class="kb-lib-lock">${locked ? '🔒' : '→'}</div>
      </div>`;
  };

  el.innerHTML = `
    <div class="kb-lib-label" style="margin-bottom:10px">Weekly Articles</div>
    ${weekly.map(renderItem).join('')}
    <div class="kb-lib-label" style="margin-top:16px;margin-bottom:10px">Always Available</div>
    ${evergreen.map(renderItem).join('')}`;
}

function openKbArticle(id) {
  const article = KB_ARTICLES.find(a => a.id === id);
  if (!article) return;

  document.getElementById('kb-article-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'kb-article-overlay';
  overlay.id = 'kb-article-overlay';
  overlay.innerHTML = `
    <div class="kb-article-head">
      <div class="kb-article-back" onclick="closeKbArticle()">← Back</div>
      <div class="kb-article-phase">${article.phase} ${article.week > 0 ? '· Week ' + article.week : ''}</div>
      <div class="kb-article-title">${article.icon} ${article.title}</div>
      <div class="kb-article-meta">${article.readTime} read · Mike Foster</div>
    </div>
    <div class="kb-article-body">${article.body}</div>`;

  document.body.appendChild(overlay);
}

function closeKbArticle() {
  const overlay = document.getElementById('kb-article-overlay');
  if (overlay) {
    overlay.style.animation = 'slideUpKb .25s ease reverse forwards';
    setTimeout(() => overlay.remove(), 250);
  }
}

// ── PUSH NOTIFICATIONS ───────────────────────────────────────────────────────
const VAPID_PUBLIC_KEY = 'BC1KAO_yS7iGApBa4-TLWmJY_9YpT-QOTOXcZHinNC20zqXI_aCA6HYcea_LFAn9qR6i8AMXIhYXN9kxh9cSOXk';
const PUSH_FUNCTION_URL = '{SB_URL}/functions/v1/send-push-notification';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64  = (base64String + padding).replace(/-/g,'+').replace(/_/g,'/');
  const raw     = window.atob(base64);
  const output  = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) output[i] = raw.charCodeAt(i);
  return output;
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return null;
  try {
    // SW_URL can be your CDN path e.g. https://cdn.jsdelivr.net/gh/USERNAME/spartan16-assets/spartan16-sw.js
    const SW_URL = 'https://cdn.jsdelivr.net/gh/MikeFosterFitness/spartan16-assets@main/spartan16-sw.js';
    if (new URL(SW_URL).origin !== window.location.origin) { console.log('SW skipped'); return null; }
    const reg = await navigator.serviceWorker.register(SW_URL, {scope: '/'});
    console.log('Service worker registered');
    return reg;
  } catch(e) {
    console.warn('Service worker registration failed:', e);
    return null;
  }
}

async function requestPushPermission() {
  if (!('Notification' in window) || !('PushManager' in window)) return false;
  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

async function subscribeToPush() {
  const reg = await navigator.serviceWorker.ready;
  if (!reg.pushManager) return null;
  try {
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    return sub;
  } catch(e) {
    console.warn('Push subscribe failed:', e);
    return null;
  }
}

async function savePushSubscription(sub) {
  const email = currentUser?.email;
  if (!email || !sub) return;
  const key  = sub.getKey('p256dh');
  const auth = sub.getKey('auth');
  const row  = {
    email,
    endpoint: sub.endpoint,
    p256dh:   btoa(String.fromCharCode(...new Uint8Array(key))),
    auth:     btoa(String.fromCharCode(...new Uint8Array(auth))),
    user_agent: navigator.userAgent.slice(0, 200),
  };
  try {
    await fetch(`${SB_URL}/rest/v1/push_subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(row)
    });
    localStorage.setItem('push_subscribed', '1');
    console.log('Push subscription saved');
  } catch(e) {
    console.warn('Save push subscription failed:', e);
  }
}

async function initPushNotifications() {
  // Register service worker
  const reg = await registerServiceWorker();
  if (!reg) return;

  // If already subscribed, just save (handles reinstalls)
  if (localStorage.getItem('push_subscribed')) return;

  // Show prompt after a short delay — do not ask immediately on login
  setTimeout(async () => {
    // Only prompt if we have not already asked
    if (Notification.permission === 'default') {
      showPushPrompt();
    } else if (Notification.permission === 'granted') {
      const sub = await subscribeToPush();
      await savePushSubscription(sub);
    }
  }, 8000); // 8 second delay after login
}

function showPushPrompt() {
  // Do not show if already dismissed
  if (localStorage.getItem('push_dismissed')) return;

  const existing = document.getElementById('push-prompt');
  if (existing) return;

  const prompt = document.createElement('div');
  prompt.id = 'push-prompt';
  prompt.className = 'install-prompt';
  prompt.innerHTML = `
    <div class="ip-text">
      <strong>Stay in the loop</strong>
      Get notified when teammates post in the Brotherhood or Mike sends a message.
    </div>
    <button class="ip-btn" onclick="enablePush()">Enable</button>
    <div class="ip-close" onclick="dismissPushPrompt()">x</div>`;
  document.body.appendChild(prompt);
}

async function enablePush() {
  document.getElementById('push-prompt')?.remove();
  const granted = await requestPushPermission();
  if (granted) {
    const sub = await subscribeToPush();
    await savePushSubscription(sub);
    showToast('Notifications enabled. The Brotherhood will find you. 🛡️');
  } else {
    showToast('Notifications blocked. Enable in browser settings if you change your mind.');
  }
}

function dismissPushPrompt() {
  localStorage.setItem('push_dismissed', '1');
  document.getElementById('push-prompt')?.remove();
}

async function sendPushToAll(title, message, excludeEmail, tag) {
  // Call the Supabase Edge Function
  try {
    await fetch(`${SB_URL}/functions/v1/send-push-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SB_KEY}`,
      },
      body: JSON.stringify({
        title,
        message,
        tag: tag || 'brotherhood',
        url: '/app-5415',
        exclude_email: excludeEmail || null,
      })
    });
  } catch(e) {
    console.warn('Push send failed:', e);
  }
}

// ── MILESTONES ───────────────────────────────────────────────────────────────
const MILESTONES = {
  // Session milestones
  first_session: {
    icon: '🏛️', label: 'First Session Logged',
    title: 'The Journey Begins',
    mike: 'Every Spartan starts somewhere. You just logged your first session. The only way is forward.',
    bh_msg: (name) => `${name} just logged their first session. The Brotherhood grows. 🛡️`
  },
  first_pb: {
    icon: '🔥', label: 'First Personal Best',
    title: 'First PB',
    mike: 'You set the standard today. Everything from here is measured against this.',
    bh_msg: (name, detail) => `${name} just hit their first PB — ${detail} 🔥`
  },
  new_pb: {
    icon: '⚡', label: 'New Personal Best',
    title: 'PB Smashed',
    mike: 'That is what progressive overload looks like. Write it down. Beat it next time.',
    bh_msg: (name, detail) => `${name} just set a new PB — ${detail} ⚡`
  },
  sessions_10: {
    icon: '💪', label: '10 Sessions Logged',
    title: '10 Sessions Done',
    mike: 'Ten sessions. A habit is forming. Most people quit before this point. You did not.',
    bh_msg: (name) => `${name} has logged 10 sessions. Consistency is the work. 💪`
  },
  sessions_25: {
    icon: '🛡️', label: '25 Sessions Logged',
    title: '25 Sessions',
    mike: 'Twenty-five sessions. That is not luck. That is commitment.',
    bh_msg: (name) => `${name} has hit 25 sessions logged. Warrior level. 🛡️`
  },
  sessions_50: {
    icon: '👑', label: '50 Sessions Logged',
    title: '50 Sessions',
    mike: 'Fifty sessions. You are no longer someone who works out. You are an athlete.',
    bh_msg: (name) => `${name} has logged 50 sessions. That is elite. 👑`
  },
  // Check-in milestones
  first_checkin: {
    icon: '📋', label: 'First Check-In Submitted',
    title: 'Accountability Starts Here',
    mike: 'First check-in done. This is the habit that separates the ones who transform from the ones who do not.',
    bh_msg: (name) => `${name} just submitted their first check-in. Accountability activated. 📋`
  },
  streak_4: {
    icon: '🔄', label: '4 Week Check-In Streak',
    title: '4 Weeks Straight',
    mike: 'Four check-ins in a row. You are showing up every week without fail. That is the programme.',
    bh_msg: (name) => `${name} has checked in 4 weeks straight. No excuses, just results. 🔄`
  },
  streak_8: {
    icon: '🔥', label: '8 Week Check-In Streak',
    title: '8 Weeks Straight',
    mike: 'Eight consecutive check-ins. Halfway through and still accountable. This is what it looks like.',
    bh_msg: (name) => `${name} — 8 weeks straight of check-ins. Halfway. Still standing. 🔥`
  },
  streak_16: {
    icon: '🏆', label: '16 Week Perfect Attendance',
    title: 'Perfect 16 Weeks',
    mike: 'Every single week. Not one missed. That is the rarest thing in this game — showing up when no one is watching.',
    bh_msg: (name) => `${name} checked in every single week for 16 weeks. Perfection. 🏆`
  },
  halfway: {
    icon: '⚔️', label: 'Week 8 — Halfway',
    title: 'Halfway There',
    mike: 'Eight weeks down. Eight to go. You have already done the hardest part — starting and not stopping.',
    bh_msg: (name) => `${name} has hit the halfway point — 8 weeks complete. The hard part is over. ⚔️`
  },
  // Performance milestones
  test300_improved: {
    icon: '⏱️', label: '300 Test Improvement',
    title: '300 Test PB',
    mike: 'Faster than last time. That is 16 weeks of work showing up in a single number.',
    bh_msg: (name, detail) => `${name} just smashed their 300 Test — ${detail} ⏱️`
  },
  score_10: {
    icon: '🌟', label: 'First 10/10 Check-In',
    title: 'Perfect Week',
    mike: 'Ten out of ten. That week was everything. Bank that feeling.',
    bh_msg: (name) => `${name} just scored 10/10 on their check-in. Perfect week. 🌟`
  },
  score_improved: {
    icon: '📈', label: 'Score Improvement',
    title: 'Moving Up',
    mike: 'Better than last week. That is all this is — better than last week, every week.',
    bh_msg: (name, detail) => `${name} improved their check-in score — ${detail} 📈`
  },
};

// Track which milestones have fired — prevent double-firing
function getMilestoneDone(key) {
  const email = currentUser?.email;
  const stored = JSON.parse(localStorage.getItem(`ms_done_${email}`) || '{}');
  return stored[key] || false;
}

function setMilestoneDone(key) {
  const email = currentUser?.email;
  const stored = JSON.parse(localStorage.getItem(`ms_done_${email}`) || '{}');
  stored[key] = true;
  localStorage.setItem(`ms_done_${email}`, JSON.stringify(stored));
}

function checkAndFireMilestone(key, detail) {
  if (getMilestoneDone(key)) return;
  const ms = MILESTONES[key];
  if (!ms) return;
  setMilestoneDone(key);
  showMilestoneOverlay(key, ms, detail);
}

function showMilestoneOverlay(key, ms, detail) {
  // Remove any existing overlay
  document.getElementById('milestone-overlay')?.remove();

  const displayName = currentUser?.first_name
    ? `${currentUser.first_name} ${currentUser.last_name||''}`.trim()
    : 'You';

  const overlay = document.createElement('div');
  overlay.className = 'milestone-overlay';
  overlay.id = 'milestone-overlay';
  overlay.innerHTML = `
    <div class="ms-confetti" id="ms-confetti"></div>
    <div class="ms-overlay-icon">${ms.icon}</div>
    <div class="ms-overlay-label">Milestone Unlocked</div>
    <div class="ms-overlay-title">${ms.title}</div>
    ${detail ? `<div class="ms-overlay-detail">${detail}</div>` : ''}
    <div class="ms-overlay-mike">${ms.mike}</div>
    <button class="ms-share-btn" onclick="shareMilestone('${key}','${encodeURIComponent(detail||'')}')">
      🛡️ Share to Brotherhood
    </button>
    <button class="ms-dismiss-btn" onclick="dismissMilestone()">
      Keep it to myself
    </button>`;

  document.body.appendChild(overlay);
  spawnConfetti();
}

function spawnConfetti() {
  const container = document.getElementById('ms-confetti');
  if (!container) return;
  const colours = ['#8B0000','#C9A84C','#E2C06A','#fff','#C41E3A'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'ms-confetti-piece';
    piece.style.cssText = `
      left:${Math.random()*100}%;
      top:-10px;
      background:${colours[Math.floor(Math.random()*colours.length)]};
      animation-duration:${2+Math.random()*2}s;
      animation-delay:${Math.random()*1.5}s;
      transform:rotate(${Math.random()*360}deg);
      width:${6+Math.random()*8}px;
      height:${6+Math.random()*8}px;
      border-radius:${Math.random()>0.5?'50%':'2px'};
    `;
    container.appendChild(piece);
  }
}

async function shareMilestone(key, encodedDetail) {
  const ms = MILESTONES[key];
  if (!ms) { dismissMilestone(); return; }
  const detail = decodeURIComponent(encodedDetail);
  const displayName = currentUser?.first_name || 'A Spartan';
  const msg = ms.bh_msg(displayName, detail);

  try {
    await fetch(`${SB_URL}/rest/v1/brotherhood_messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        email: currentUser?.email,
        display_name: displayName,
        role: currentRole || 'client',
        message: msg,
      })
    });
    showToast('Shared to the Brotherhood! 🛡️');
  } catch(e) {
    console.error('Share error:', e);
  }
  dismissMilestone();
}

function dismissMilestone() {
  const overlay = document.getElementById('milestone-overlay');
  if (overlay) {
    overlay.style.animation = 'fadeInMs .2s ease reverse forwards';
    setTimeout(() => overlay.remove(), 200);
  }
}

function showToast(msg) {
  document.querySelectorAll('.ms-toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'ms-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── MILESTONE CHECK HOOKS ─────────────────────────────────────────────────────
// Called after session save
function checkSessionMilestones(sessionCount) {
  if (sessionCount === 1)  checkAndFireMilestone('first_session');
  if (sessionCount === 10) checkAndFireMilestone('sessions_10');
  if (sessionCount === 25) checkAndFireMilestone('sessions_25');
  if (sessionCount === 50) checkAndFireMilestone('sessions_50');
}

// Called after PB detected
function checkPBMilestone(exerciseName, weightKg, isFirst) {
  const detail = `${weightKg}kg ${exerciseName}`;
  if (isFirst) checkAndFireMilestone('first_pb', detail);
  else checkAndFireMilestone('new_pb', detail);
}

// Called after check-in submitted
function checkCheckinMilestones(checkinCount, overallScore, prevScore, week) {
  if (checkinCount === 1) checkAndFireMilestone('first_checkin');
  if (checkinCount === 4) checkAndFireMilestone('streak_4');
  if (checkinCount === 8) checkAndFireMilestone('streak_8');
  if (checkinCount === 16) checkAndFireMilestone('streak_16');
  if (week === 8) checkAndFireMilestone('halfway');
  if (overallScore === 10) checkAndFireMilestone('score_10');
  if (prevScore && overallScore > prevScore) {
    const detail = `${prevScore}/10 to ${overallScore}/10`;
    checkAndFireMilestone('score_improved', detail);
  }
}

// Called after 300 test improvement detected
function check300Milestone(prevTime, newTime) {
  if (prevTime && newTime && newTime < prevTime) {
    const diff = prevTime - newTime;
    const mins = Math.floor(diff/60);
    const secs = Math.round(diff%60);
    const detail = `${mins > 0 ? mins + 'm ' : ''}${secs}s faster`;
    checkAndFireMilestone('test300_improved', detail);
  }
}

// ── BROTHERHOOD ──────────────────────────────────────────────────────────────
let bhMessages = [];
let bhPendingImage = null;
let bhPendingImageFile = null;
let bhLastDate = null;
let bhPollingInterval = null;

async function loadBrotherhood() {
  const countEl = document.getElementById('bh-member-count');
  const msgsEl  = document.getElementById('bh-messages');
  if (!msgsEl) return;

  // Get member count
  try {
    const users = await sbGet('platform_users?role=eq.client&is_active=eq.true&select=id');
    if (countEl) countEl.textContent = `${users.length} Spartans`;
  } catch(_) {}

  // Load messages
  await fetchBhMessages();

  // Poll for new messages every 15 seconds while on this tab
  if (bhPollingInterval) clearInterval(bhPollingInterval);
  bhPollingInterval = setInterval(fetchBhMessages, 15000);
}

async function fetchBhMessages() {
  try {
    const msgs = await sbGet(
      'brotherhood_messages?is_deleted=eq.false&order=created_at.asc&limit=100&select=*'
    );
    bhMessages = msgs;
    renderBhMessages();
  } catch(e) {
    const msgsEl = document.getElementById('bh-messages');
    if (msgsEl && msgsEl.children.length <= 1) {
      msgsEl.innerHTML = '<div class="bh-empty"><div class="bh-empty-icon">🛡️</div><div class="bh-empty-text">The Brotherhood is quiet. Be the first to post.</div></div>';
    }
  }
}

function renderBhMessages() {
  const msgsEl = document.getElementById('bh-messages');
  if (!msgsEl) return;
  const myEmail = currentUser?.email;
  const isCoach = currentRole === 'coach';
  bhLastDate = null;

  if (!bhMessages.length) {
    msgsEl.innerHTML = '<div class="bh-empty"><div class="bh-empty-icon">🛡️</div><div class="bh-empty-text">The Brotherhood is quiet. Be the first to post.</div></div>';
    return;
  }

  // Check if scrolled to bottom before re-render
  const wasAtBottom = msgsEl.scrollHeight - msgsEl.scrollTop - msgsEl.clientHeight < 60;

  msgsEl.innerHTML = bhMessages.map(msg => {
    const isMine  = msg.email === myEmail;
    const isCoachMsg = msg.role === 'coach';
    const msgDate = new Date(msg.created_at).toLocaleDateString('en-GB', {day:'numeric',month:'long'});
    const msgTime = new Date(msg.created_at).toLocaleTimeString('en-GB', {hour:'2-digit',minute:'2-digit'});
    const canDelete = isMine || isCoach;

    let divider = '';
    if (msgDate !== bhLastDate) {
      divider = `<div class="bh-day-divider">${msgDate}</div>`;
      bhLastDate = msgDate;
    }

    const bubbleClass = isMine ? 'mine' : isCoachMsg ? 'theirs coach-msg' : 'theirs';
    const nameDisplay = isCoachMsg ? 'Mike Foster' : msg.display_name;

    return `${divider}
      <div class="bh-msg ${bubbleClass}" id="bh-msg-${msg.id}">
        ${!isMine ? `<div class="bh-msg-name">${nameDisplay}</div>` : ''}
        ${msg.image_url ? `<img class="bh-msg-img ${isMine?'mine-img':'theirs-img'}"
          src="${msg.image_url}" alt="image"
          onclick="viewBhImage('${msg.image_url}')">` : ''}
        ${msg.message ? `<div class="bh-bubble">${escapeHtml(msg.message)}</div>` : ''}
        <div style="display:flex;align-items:center;gap:6px">
          <div class="bh-msg-time">${msgTime}</div>
          ${canDelete ? `<div class="bh-delete-btn" onclick="deleteBhMessage('${msg.id}')">Delete</div>` : ''}
        </div>
      </div>`;
  }).join('');

  // Scroll to bottom if was at bottom or first load
  if (wasAtBottom || bhMessages.length < 5) {
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/\n/g,'<br>');
}

async function sendBhMessage() {
  const input = document.getElementById('bh-input');
  const text  = input?.value.trim();
  if (!text && !bhPendingImage) return;

  const btn = document.getElementById('bh-send-btn');
  if (btn) btn.disabled = true;

  try {
    let imageUrl = null;
    let imagePath = null;

    // Upload image if attached
    if (bhPendingImageFile) {
      const result = await uploadBhImage(bhPendingImageFile);
      imageUrl  = result?.url;
      imagePath = result?.path;
    }

    const displayName = currentUser?.first_name
      ? `${currentUser.first_name} ${currentUser.last_name||''}`.trim()
      : currentUser?.email?.split('@')[0] || 'Warrior';

    const row = {
      email:        currentUser?.email,
      display_name: displayName,
      role:         currentRole || 'client',
      message:      text || null,
      image_url:    imageUrl,
      image_path:   imagePath,
    };

    await fetch(`${SB_URL}/rest/v1/brotherhood_messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(row)
    });

    // Send push notification to all other members
    const senderName = row.display_name || 'Someone';
    const pushMsg = row.message
      ? `${senderName}: ${row.message.slice(0, 80)}${row.message.length > 80 ? '...' : ''}`
      : `${senderName} shared a photo`;
    sendPushToAll('Spartan Brotherhood 🛡️', pushMsg, currentUser?.email, 'brotherhood');

    if (input) { input.value = ''; input.style.height = 'auto'; }
    clearBhImage();
    await fetchBhMessages();

    const msgsEl = document.getElementById('bh-messages');
    if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight;

  } catch(err) {
    console.error('Send message error:', err);
  }

  if (btn) btn.disabled = false;
}

async function uploadBhImage(file) {
  const ext  = file.name.split('.').pop() || 'jpg';
  const path = `brotherhood/${Date.now()}_${Math.random().toString(36).substr(2,6)}.${ext}`;

  try {
    const res = await fetch(`${SB_URL}/storage/v1/object/spartan16/${path}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SB_KEY}`,
        'Content-Type': file.type,
      },
      body: file
    });

    if (!res.ok) throw new Error('Upload failed');

    const url = `${SB_URL}/storage/v1/object/public/spartan16/${path}`;
    return { url, path };
  } catch(e) {
    console.error('Image upload error:', e);
    return null;
  }
}

async function deleteBhMessage(id) {
  try {
    await fetch(`${SB_URL}/rest/v1/brotherhood_messages?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      },
      body: JSON.stringify({ is_deleted: true, deleted_by: currentUser?.email })
    });
    bhMessages = bhMessages.filter(m => m.id !== id);
    renderBhMessages();
  } catch(err) { console.error('Delete error:', err); }
}

function handleBhImage(input) {
  const file = input.files[0];
  if (!file) return;
  bhPendingImageFile = file;
  const reader = new FileReader();
  reader.onload = e => {
    bhPendingImage = e.target.result;
    const preview = document.getElementById('bh-img-preview');
    const previewImg = document.getElementById('bh-preview-img');
    if (preview && previewImg) {
      previewImg.src = e.target.result;
      preview.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
}

function clearBhImage() {
  bhPendingImage = null;
  bhPendingImageFile = null;
  const preview = document.getElementById('bh-img-preview');
  if (preview) preview.style.display = 'none';
  const fileInput = document.getElementById('bh-file-input');
  if (fileInput) fileInput.value = '';
}

function viewBhImage(url) {
  window.open(url, '_blank');
}

function bhKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendBhMessage();
  }
}

function autoResizeBhInput(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

function stopBhPolling() {
  if (bhPollingInterval) {
    clearInterval(bhPollingInterval);
    bhPollingInterval = null;
  }
}

// ── MEN'S COACHING ───────────────────────────────────────────────────────────
const MENS_AGE_DATA = {
  '25-35': {
    label: '25-35',
    sub: 'Peak testosterone window — build the foundation now',
    tags: ['Testosterone peak', 'Fastest recovery', 'Highest adaptability'],
    testosterone: {
      title: 'Testosterone — Your Peak Window',
      items: [
        'Total testosterone peaks in your mid-20s — you are in or near your highest natural window',
        'Morning testosterone is 20-25% higher than evening — train in the morning when possible for maximal output',
        'Sleep is the single biggest driver of testosterone — under 6 hours drops T by up to 15% after one week',
        'Body fat above 25% directly suppresses testosterone — fat cells convert T to oestrogen',
        'Chronic stress raises cortisol which directly competes with and suppresses testosterone production',
        'Heavy compound lifts (squat, deadlift, bench) acutely spike testosterone — programme them consistently',
        'Overtraining without adequate recovery reduces testosterone — more is not always better',
        'This is the time to build the muscle base that will serve you for decades — use the hormonal advantage',
      ]
    },
    recovery: {
      title: 'Recovery and Adaptation',
      items: [
        'Recovery is fastest in this decade — you can handle higher training frequency and volume',
        'Sleep 7-9 hours — non-negotiable. Growth hormone release peaks in deep sleep stages',
        'Post-training nutrition window matters most here — hit protein within 2 hours of training',
        'Alcohol significantly impairs testosterone and recovery — even moderate amounts reduce T for 24 hours',
        'Cold exposure after heavy sessions can blunt the inflammatory signal needed for adaptation — use wisely',
        'Active recovery sessions outperform total rest days for long-term adaptation',
        'Mental recovery matters as much as physical — high life stress reduces training adaptation',
      ]
    },
    body_comp: {
      title: 'Body Composition — What to Expect',
      items: [
        'Muscle building is fastest in this decade — prioritise progressive overload and protein',
        'Fat loss while building muscle (body recomposition) is most achievable here',
        'Realistic natural muscle gain: 1-2kg per month in early training, 0.5-1kg per month as you advance',
        'Fat loss rate: 0.5-1kg per week is sustainable without sacrificing muscle',
        'Metabolism is at its highest — total daily energy expenditure is greatest in this decade',
        'Muscle definition becomes visible at roughly 12-15% body fat for most men',
        'Weight fluctuates 1-3kg daily from water, food and glycogen — judge progress weekly not daily',
      ]
    },
    health: {
      title: 'Health Priorities in Your 20s and 30s',
      items: [
        'Cardiovascular fitness built now creates protection that lasts decades — invest in Zone 2 work',
        'Bone density peaks around age 30 — heavy loading now creates the reserve you will need later',
        'Metabolic habits formed now persist — build the patterns around eating and training that will serve you at 50',
        'Testicular health: self-examination monthly — testicular cancer peaks in this age group',
        'Blood pressure, cholesterol and blood glucose: know your numbers by 30',
        'Mental health: depression and anxiety peak in men aged 25-35 — exercise is one of the strongest interventions',
        'Sleep debt accumulated now has long-term hormonal and cognitive consequences — protect your sleep',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'Most well-evidenced supplement in existence. Strength, power, muscle mass and cognitive function all improve.'},
      {icon:'🌞', name:'Vitamin D3', dose:'2000-4000 IU daily', why:'Most men are deficient. Directly supports testosterone production, immune function and mood.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg before bed', why:'Deficiency is extremely common. Supports testosterone, sleep quality, muscle function and nervous system recovery.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'2-3g daily', why:'Anti-inflammatory, supports cardiovascular health and has documented testosterone-supporting effects.'},
      {icon:'⚡', name:'Zinc', dose:'25-30mg daily with food', why:'Essential for testosterone production. Intense training increases zinc loss through sweat.'},
      {icon:'🌿', name:'Ashwagandha (KSM-66)', dose:'300-600mg daily', why:'Clinically shown to reduce cortisol by 30% and increase testosterone by 15-17% in trained men.'},
    ]
  },
  '35-45': {
    label: '35-45',
    sub: 'Testosterone declining — training is the primary intervention',
    tags: ['T declining 1% per year', 'Recovery slowing', 'Prevention window'],
    testosterone: {
      title: 'Testosterone — Managing the Decline',
      items: [
        'Testosterone drops approximately 1% per year from age 30 — at 40 you may have 10% less than your peak',
        'This is significant but entirely manageable — lifestyle and training are the primary levers',
        'Heavy resistance training is the most effective natural testosterone intervention available',
        'Sleep quality often declines in this decade — address it aggressively as it directly impacts T',
        'Visceral fat (around the organs) increases in this decade and accelerates testosterone decline',
        'Signs of lower T: reduced libido, slower recovery, lower motivation, mood changes, reduced morning erections',
        'If you suspect significant decline, a GP blood test is worth getting — reference ranges are 10-30 nmol/L',
        'Testosterone replacement therapy (TRT) is a legitimate medical option — discuss with a doctor not a forum',
        'Stress management becomes more important as cortisol-T competition intensifies with age',
      ]
    },
    recovery: {
      title: 'Recovery — It Takes Longer Now',
      items: [
        'Recovery between heavy sessions extends from 24-48 hours to 48-72 hours in your late 30s',
        'This is not weakness — it is physiology. Adjust your programme accordingly',
        'Sleep becomes even more critical — prioritise 7-9 hours as a non-negotiable',
        'Joint health needs proactive attention — warm up longer and cool down properly',
        'Nutrition timing becomes more important as anabolic window sensitivity changes',
        'Deload weeks every 4-6 weeks are now genuinely necessary rather than optional',
        'Active recovery: walking, swimming and mobility work between hard sessions dramatically improves adaptation',
        'Alcohol recovery time increases significantly — what was a one-day recovery is now two or three',
      ]
    },
    body_comp: {
      title: 'Body Composition — Realistic Expectations',
      items: [
        'Muscle building is still very achievable but slower — 0.5-1kg per month with optimal training and nutrition',
        'Metabolism slows approximately 1-2% per decade — total daily calorie burn decreases slightly',
        'Fat tends to accumulate around the abdomen as testosterone declines — training and diet are the response',
        'Body recomposition (lose fat, gain muscle simultaneously) is harder but still possible',
        'Maintaining muscle mass requires more deliberate effort than in the previous decade',
        'Protein needs increase slightly to compensate for reduced anabolic sensitivity — 1.8-2.0g per kg bodyweight',
        'The scale matters less than strength numbers, measurements and how clothes fit',
      ]
    },
    health: {
      title: 'Health Priorities in Your Mid-Life Decade',
      items: [
        'Cardiovascular risk begins rising — regular cardio work is now a health intervention not just fitness',
        'Blood pressure: should be checked annually — hypertension often develops silently in this decade',
        'Cholesterol and blood glucose: know your numbers and recheck every 2-3 years',
        'Prostate: PSA test discussion with GP from age 40 if family history of prostate cancer',
        'Colorectal cancer: bowel cancer screening eligibility begins — do not ignore it',
        'Mental health: midlife depression is common and underdiagnosed in men — seek help proactively',
        'Bone density: resistance training is actively protecting your future self',
        'Vision and hearing: first checks in this decade are recommended',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'More important than ever — preserves muscle mass, power output and cognitive function as T declines.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'3000-4000 IU D3, 100mcg K2', why:'Testosterone support, bone density protection and cardiovascular health all require adequate D3.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg before bed', why:'Testosterone production, sleep quality and recovery all depend on adequate magnesium.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'3g daily', why:'Cardiovascular protection becomes increasingly important. Also directly supports testosterone and reduces cortisol.'},
      {icon:'⚡', name:'Zinc', dose:'25-30mg daily', why:'Testosterone cofactor — deficiency accelerates decline. Particularly important if training hard.'},
      {icon:'🌿', name:'Ashwagandha (KSM-66)', dose:'600mg daily', why:'Cortisol reduction and testosterone support become more valuable as natural T declines.'},
      {icon:'🦴', name:'Collagen + Vitamin C', dose:'10g collagen, 500mg Vit C', why:'Joint health and connective tissue integrity need proactive support from this decade.'},
    ]
  },
  '45-55': {
    label: '45-55',
    sub: 'Andropause window — strength training is medicine',
    tags: ['Andropause possible', 'Cardiovascular priority', 'Strength is longevity'],
    testosterone: {
      title: 'Testosterone — The Andropause Window',
      items: [
        'Some men in this age range experience andropause — a gradual decline analogous to menopause',
        'Symptoms: fatigue, reduced libido, mood changes, brain fog, loss of muscle, increased body fat',
        'These symptoms are often dismissed as normal ageing — they are not inevitable and are treatable',
        'Blood test: total testosterone below 10-12 nmol/L warrants a conversation with your GP about TRT',
        'TRT when genuinely indicated can be transformative — it is not cheating, it is restoring physiological levels',
        'Resistance training remains the strongest natural intervention for testosterone maintenance',
        'Sleep, stress and body composition are the three biggest lifestyle levers for testosterone in this decade',
        'DHEA declines in parallel with testosterone — this is a precursor hormone worth knowing about',
        'Free testosterone matters as much as total — SHBG rises with age, binding more testosterone',
      ]
    },
    recovery: {
      title: 'Recovery — Quality Over Quantity',
      items: [
        'Heavy sessions now require 72 hours of recovery — programme around this not against it',
        'Sleep architecture changes in this decade — deep sleep reduces, affecting growth hormone release',
        'Sleep hygiene becomes critical: consistent sleep time, dark cool room, no screens before bed',
        'Inflammation takes longer to resolve after hard sessions — anti-inflammatory nutrition helps',
        'Listen to your body more than in previous decades — chronic fatigue signals now mean more',
        'Deload weeks every 3-4 weeks are appropriate and productive',
        'Mobility and flexibility work are now as important as strength work for long-term training capacity',
        'Mental stress compounds physical recovery needs — manage both intentionally',
      ]
    },
    body_comp: {
      title: 'Body Composition — Managing Change',
      items: [
        'Muscle loss without resistance training accelerates to 3-5% per decade in this age group',
        'Resistance training entirely reverses this — men in their 50s who train can have more muscle than sedentary 30-year-olds',
        'Metabolism slows more meaningfully — a 200-300 kcal daily reduction in total expenditure is typical',
        'Visceral fat increases with hormonal changes — cardiovascular and metabolic risk rise with it',
        'Body recomposition is slower but remains achievable with consistent training and high protein',
        'Protein needs are now at their highest: 1.8-2.2g per kg bodyweight to maintain muscle',
        'The best investment you can make in this decade is muscle mass — it is the currency of longevity',
      ]
    },
    health: {
      title: 'Health Priorities — Prevention is Everything',
      items: [
        'Cardiovascular disease risk is now significant — cardio training is a medical intervention',
        'Annual blood pressure, cholesterol, blood glucose checks are non-negotiable',
        'Prostate health: PSA testing discussion with GP — prostate cancer incidence rises sharply in this decade',
        'Colorectal screening: bowel cancer screening is important — do not delay or avoid it',
        'Bone density: osteoporosis is not just a womens condition — men lose bone density too',
        'Cognitive health: sleep, exercise and omega-3 are the three most evidence-based protective factors',
        'Erectile dysfunction: often an early cardiovascular warning sign — worth discussing with GP',
        'Mental health: highest male suicide rate is in the 45-55 age group — reach out proactively',
        'Vision, hearing, dental: annual checks in this decade catch things early',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'Critical for muscle preservation, strength, power and increasingly strong evidence for cognitive protection.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'4000 IU D3, 100mcg K2', why:'Bone density, testosterone support, cardiovascular health and immune function all require optimal D3.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg before bed', why:'Sleep quality, testosterone production, muscle function and cardiovascular health all depend on it.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'3g daily', why:'Cardiovascular protection is now a priority. Also supports testosterone, mood and cognitive function.'},
      {icon:'🌿', name:'Ashwagandha (KSM-66)', dose:'600mg daily', why:'Cortisol reduction and testosterone support are highly relevant in the andropause window.'},
      {icon:'💊', name:'B12', dose:'1000mcg daily', why:'Absorption declines with age. Energy, cognitive function and nerve health all depend on adequate B12.'},
      {icon:'🦴', name:'Collagen + Vitamin C', dose:'10-15g collagen, 500mg Vit C', why:'Joint integrity, skin health and connective tissue support — all declining without intervention.'},
      {icon:'⚡', name:'Zinc', dose:'30mg daily', why:'Testosterone cofactor — deficiency is common and accelerates hormonal decline.'},
    ]
  },
  '55+': {
    label: '55+',
    sub: 'Strength training is the most powerful longevity tool available',
    tags: ['Longevity priority', 'Muscle is medicine', 'Cardiovascular critical'],
    testosterone: {
      title: 'Testosterone — Taking Control',
      items: [
        'Total testosterone may now be 30-50% below your peak — this is significant and worth investigating',
        'TRT is a legitimate and increasingly mainstream option for men with confirmed low T — discuss with GP',
        'Even without TRT, lifestyle and training meaningfully influence testosterone at any age',
        'The benefits of maintaining optimal testosterone: muscle mass, bone density, mood, cognition, libido and energy',
        'SHBG continues rising — free testosterone (the active form) is often proportionally lower than total T',
        'Resistance training at any age stimulates testosterone and growth hormone — the effect does not disappear',
        'Men who train consistently in their 50s and 60s have measurably higher testosterone than sedentary peers',
        'Diet: reduce refined carbohydrates and alcohol which both suppress testosterone',
      ]
    },
    recovery: {
      title: 'Recovery — Respect What Your Body Needs',
      items: [
        'Recovery now takes 72-96 hours after heavy sessions — this is normal, programme around it',
        'Sleep is the most important recovery tool and often the most disrupted in this decade',
        'Growth hormone secretion during sleep declines significantly — make every hour of sleep count',
        'Inflammation resolution is slower — anti-inflammatory nutrition and adequate rest are essential',
        'Overreaching and overtraining have more serious consequences at this age — err on the side of recovery',
        'Active recovery is highly effective: walking, swimming, yoga, mobility work between hard sessions',
        'Hydration needs attention — thirst response becomes less reliable with age',
        'Listen to your joints — they are telling you something important about your training approach',
      ]
    },
    body_comp: {
      title: 'Body Composition — The Power of Consistency',
      items: [
        'Men who strength train consistently in their 50s and beyond maintain impressive muscle mass and function',
        'Muscle loss without training can reach 5-8% per decade at this age — but this is entirely preventable',
        'Strength training is the single most effective anti-ageing intervention available — the evidence is overwhelming',
        'Protein needs are at their highest: 2.0-2.2g per kg bodyweight to maintain and build muscle',
        'Anabolic resistance means the muscle-building signal is blunted — higher protein and heavier training are the responses',
        'Metabolism has slowed significantly — quality of food matters more than ever',
        'Body fat tends to accumulate viscerally — waist circumference is a better health marker than weight',
        'You can still build muscle, lose fat and improve fitness at any age — the timeline is different, the outcome is not',
      ]
    },
    health: {
      title: 'Health — Exercise is the Best Medicine',
      items: [
        'Cardiovascular disease is the leading cause of death in this age group — cardio training is medicine',
        'Annual blood pressure, cholesterol, blood glucose, kidney function and liver function checks',
        'Prostate: regular PSA monitoring is recommended — discuss frequency with your GP',
        'Colorectal screening: bowel cancer screening is critical — do not ignore correspondence about this',
        'Bone density: men lose bone rapidly after 65 without loading — you are building the reserve now',
        'Cognitive health: aerobic exercise reduces dementia risk by up to 35% — this is extraordinary',
        'Falls: balance training significantly reduces fall risk which is the leading cause of fracture in older men',
        'Mental health: social connection, purpose and exercise are the three most powerful protective factors',
        'Vision, dental, hearing: annual checks and do not ignore changes',
        'Cancer screening: know which screens are appropriate for your age and family history',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'Strongest evidence base for muscle preservation, strength and cognitive protection in older men. Non-negotiable.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'4000 IU D3, 100mcg K2', why:'Bone density, falls prevention, immune function and testosterone all depend on optimal D3.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg before bed', why:'Sleep, muscle function, heart health and bone density — deficiency is extremely common and consequential.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'3g daily', why:'Cardiovascular protection, cognitive health, anti-inflammatory and testosterone support.'},
      {icon:'💊', name:'B12', dose:'1000mcg sublingual daily', why:'Absorption decreases significantly with age. Deficiency causes fatigue, cognitive decline and nerve damage.'},
      {icon:'🦴', name:'Collagen + Vitamin C', dose:'15g collagen, 500mg Vit C', why:'Joint health, skin integrity, bone matrix support. Takes 3 months to show effect — start and stay consistent.'},
      {icon:'🌿', name:'Ashwagandha (KSM-66)', dose:'600mg daily', why:'Cortisol reduction, testosterone support and cognitive protection are all highly relevant.'},
      {icon:'💊', name:'Coenzyme Q10', dose:'200mg daily', why:'Mitochondrial energy production declines with age. CoQ10 supports cellular energy, heart health and exercise capacity.'},
    ]
  }
};

let mensOpen = false;
let mensSetupDone = false;
let clientAgeBracket = null;
let selectedAgeBracket = null;

function toggleMensSection() {
  mensOpen = !mensOpen;
  const content = document.getElementById('mens-content');
  const chevron = document.getElementById('mt-chevron');
  content.style.display = mensOpen ? 'block' : 'none';
  chevron.classList.toggle('open', mensOpen);
  if (mensOpen && !mensSetupDone) {
    renderMensSetup();
  }
}

function renderMensSetup() {
  const content = document.getElementById('mens-content');
  const brackets = [
    {key:'25-35', label:'25-35', sub:'Peak testosterone window'},
    {key:'35-45', label:'35-45', sub:'Building the base'},
    {key:'45-55', label:'45-55', sub:'Mid-life optimisation'},
    {key:'55+',   label:'55+',   sub:'Strength and longevity'},
  ];

  content.innerHTML = `
    <div class="ms-setup">
      <div class="ms-setup-title">One-time setup</div>
      <div class="ms-setup-sub">Select your age bracket to unlock content tailored to where you are right now hormonally, physically and in terms of health priorities.</div>
      <div class="ms-age-label">Your age bracket</div>
      <div class="age-bracket-grid">
        ${brackets.map(b => `
          <div class="ab-card" onclick="selectAgeBracket(this,'${b.key}')">
            <div class="ab-card-age">${b.label}</div>
            <div class="ab-card-sub">${b.sub}</div>
          </div>`).join('')}
      </div>
      <button class="ms-save-btn" onclick="saveMensSetup()">Save My Profile</button>
    </div>`;
}

function selectAgeBracket(el, key) {
  document.querySelectorAll('.ab-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  selectedAgeBracket = key;
}

async function saveMensSetup() {
  if (!selectedAgeBracket) {
    alert('Please select your age bracket');
    return;
  }
  const email = currentUser?.email;
  clientAgeBracket = selectedAgeBracket;
  localStorage.setItem(`mens_profile_${email}`, JSON.stringify({age_bracket: selectedAgeBracket}));

  try {
    await fetch(`${SB_URL}/rest/v1/platform_users?email=eq.${encodeURIComponent(email)}`, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json','apikey':SB_KEY,'Authorization':`Bearer ${SB_KEY}`},
      body: JSON.stringify({age_bracket: selectedAgeBracket})
    });
  } catch(_) {}

  mensSetupDone = true;
  renderMensContent();
}

function renderMensContent() {
  const content = document.getElementById('mens-content');
  if (!content) return;
  const data = MENS_AGE_DATA[clientAgeBracket];
  if (!data) return;

  content.innerHTML = `
    <div class="mens-hero">
      <div class="mh-eyebrow">Your Age Bracket</div>
      <div class="mh-name">${data.label}</div>
      <div class="mh-sub">${data.sub}</div>
      <div class="mh-tags">${data.tags.map(t => `<span class="mh-tag">${t}</span>`).join('')}</div>
    </div>
    ${renderMsCard('⚡', 'Testosterone', data.testosterone.items, 'ms-test')}
    ${renderMsCard('💤', 'Recovery', data.recovery.items, 'ms-rec')}
    ${renderMsCard('📊', 'Body Composition', data.body_comp.items, 'ms-body')}
    ${renderMsCard('❤️', 'Health Priorities', data.health.items, 'ms-health')}
    ${renderMsSuppsCard(data.supplements)}
    <div class="ms-note"><strong>Important</strong>Supplement recommendations are evidence-based but not medical advice. If you are on medication or have a health condition, check with your GP before starting anything new. If you suspect low testosterone, a blood test is the right first step — not a supplement stack.</div>
    <div class="ms-edit-btn" onclick="resetMensSetup()">Update my profile</div>`;
}

function renderMsCard(icon, title, items, id) {
  return `
    <div class="ms-card">
      <div class="ms-card-head" onclick="toggleMsCard('${id}')">
        <span class="ms-card-icon">${icon}</span>
        <span class="ms-card-title">${title}</span>
        <span class="ms-card-chev" id="ms-chev-${id}">▾</span>
      </div>
      <div class="ms-card-body" id="ms-body-${id}">
        ${items.map(item => `
          <div class="ms-item">
            <div class="ms-item-dot"></div>
            <div>${item}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderMsSuppsCard(supplements) {
  return `
    <div class="ms-card">
      <div class="ms-card-head" onclick="toggleMsCard('ms-supps')">
        <span class="ms-card-icon">💊</span>
        <span class="ms-card-title">Supplements</span>
        <span class="ms-card-chev" id="ms-chev-ms-supps">▾</span>
      </div>
      <div class="ms-card-body" id="ms-body-ms-supps">
        ${supplements.map(s => `
          <div class="ms-supp">
            <div class="ms-supp-icon">${s.icon}</div>
            <div>
              <div class="ms-supp-name">${s.name}</div>
              <div class="ms-supp-dose">${s.dose}</div>
              <div class="ms-supp-why">${s.why}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function toggleMsCard(id) {
  const body = document.getElementById(`ms-body-${id}`);
  const chev = document.getElementById(`ms-chev-${id}`);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (chev) chev.classList.toggle('open', !open);
}

function resetMensSetup() {
  const email = currentUser?.email;
  localStorage.removeItem(`mens_profile_${email}`);
  clientAgeBracket = null;
  mensSetupDone = false;
  selectedAgeBracket = null;
  renderMensSetup();
}

function loadMensSection() {
  const email = currentUser?.email;
  const saved = localStorage.getItem(`mens_profile_${email}`);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      clientAgeBracket = data.age_bracket;
      mensSetupDone = true;
      // Update sub text
      const d = MENS_AGE_DATA[clientAgeBracket];
      const subEl = document.getElementById('mt-sub-text');
      if (subEl && d) subEl.textContent = d.sub;
    } catch(_) {}
  }
}

// ── WOMEN'S COACHING ─────────────────────────────────────────────────────────
const CYCLE_PHASES = {
  menstrual: {
    name: 'Menstrual Phase',
    days: 'Days 1-5',
    tags: ['Low oestrogen', 'Low progesterone', 'Inflammation higher'],
    colour: 'rgba(180,60,60,.6)',
    training: {
      title: 'Training This Phase',
      intensity: 'Moderate — your body can handle more than you think',
      items: [
        'Strength training is well-tolerated — oestrogen is low but so is fatigue-causing progesterone',
        'Pain tolerance may be lower — reduce load by 5-10% if needed, do not skip the session',
        'Cardio can feel harder — this is normal, perceived effort is higher than actual effort',
        'Yoga, mobility and lower-intensity work are ideal complementary sessions',
        'Iron loss through bleeding increases fatigue — prioritise sleep and iron-rich foods',
        'If cramps are severe: train around them, not through them. Listen to the body.',
      ]
    },
    nutrition: {
      title: 'Nutrition This Phase',
      items: [
        'Iron is the priority — lean red meat, lentils, spinach, fortified cereals',
        'Vitamin C alongside iron sources increases absorption significantly',
        'Anti-inflammatory foods help with cramps — oily fish, turmeric, dark leafy greens',
        'Calorie needs are at their lowest this phase — do not over-eat to compensate for fatigue',
        'Magnesium-rich foods reduce cramping — dark chocolate, pumpkin seeds, almonds',
        'Avoid excessive caffeine and alcohol — both worsen cramps and disrupt sleep',
        'Protein target stays the same — muscle protein synthesis is still important',
      ]
    },
    supplements: [
      {icon:'💊', name:'Iron', dose:'18mg daily (food-first)', why:'Replaces iron lost through bleeding. Supplement only if diet is insufficient — check with GP first.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'300-400mg before bed', why:'Reduces cramping, improves sleep quality, supports nervous system recovery.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'2-3g daily', why:'Reduces prostaglandin production which drives cramps and inflammation.'},
      {icon:'🌞', name:'Vitamin D3', dose:'2000 IU daily', why:'Supports immune function and mood during a phase where both can dip.'},
    ],
    body_changes: {
      title: 'Body Changes — What to Expect',
      items: [
        'Weight may be 1-3kg lower than luteal phase peak — this is fluid loss, not fat loss',
        'Bloating reduces as progesterone drops — you will feel and look leaner',
        'Energy levels are variable — day 1-2 often toughest, days 3-5 typically improve',
        'Strength numbers may dip slightly — normal, not a fitness regression',
        'Skin may be more reactive — increased sebum production around menstruation is normal',
      ]
    }
  },
  follicular: {
    name: 'Follicular Phase',
    days: 'Days 6-13',
    tags: ['Rising oestrogen', 'Peak energy', 'Best recovery'],
    colour: 'rgba(60,180,120,.6)',
    training: {
      title: 'Training This Phase',
      intensity: 'High — this is your strongest window',
      items: [
        'Rising oestrogen improves strength, power output, pain tolerance and recovery speed',
        'This is the best phase to attempt personal bests — neuromuscular coordination peaks',
        'High-intensity work, heavy compound lifts and sprints are all well-tolerated',
        'Muscle protein synthesis is elevated — progressive overload responds best here',
        'Recovery between sessions is faster — you can handle more training volume',
        'Motivation and drive are naturally higher — use this energy strategically',
      ]
    },
    nutrition: {
      title: 'Nutrition This Phase',
      items: [
        'Calorie needs are moderate — match your targets without significant adjustment',
        'Carbohydrate metabolism is efficient — good phase for higher carb intake around training',
        'Protein target stays at your prescribed level — muscle building is responsive now',
        'Oestrogen naturally suppresses appetite slightly — do not under-eat',
        'Hydration is especially important as training intensity increases',
        'This is a good phase for introducing new foods — gut tolerance tends to be better',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'3-5g daily', why:'Emerging evidence shows particular benefit for women — strength, power and cognitive function.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'2-3g daily', why:'Supports the anti-inflammatory environment that allows hard training to convert to adaptation.'},
      {icon:'🌞', name:'Vitamin D3', dose:'2000 IU daily', why:'Supports muscle function and immune health throughout the training block.'},
      {icon:'🟡', name:'Vitamin B complex', dose:'As directed', why:'Supports energy metabolism during a high-output phase. Particularly B6 and B12.'},
    ],
    body_changes: {
      title: 'Body Changes — What to Expect',
      items: [
        'You will likely feel and look your leanest during this phase',
        'Muscle definition is more visible as water retention is at its lowest',
        'Energy, mood and libido are naturally elevated — this is oestrogen at work',
        'Skin typically clears and looks healthiest during follicular phase',
        'Weight is stable and reflects true composition most accurately here',
      ]
    }
  },
  ovulatory: {
    name: 'Ovulatory Phase',
    days: 'Days 12-16',
    tags: ['Oestrogen peak', 'Testosterone spike', 'Highest power', 'Injury risk elevated'],
    colour: 'rgba(220,180,60,.6)',
    training: {
      title: 'Training This Phase',
      intensity: 'High — but warm up properly',
      items: [
        'Peak testosterone surge means absolute best for power, speed and aggression',
        'IMPORTANT: Ligament laxity increases around ovulation — ACL injury risk is significantly higher',
        'Prioritise thorough warm-up with joint stability work before heavy or explosive sessions',
        'Avoid skipping warm-up or rushing into max efforts without preparation',
        'Plyometrics, Olympic lifts and sprint work feel exceptional — use the window',
        'Core stability and single-leg work are important counterbalances to increased laxity',
        'This is the phase to push hardest — but with smart preparation, not recklessness',
      ]
    },
    nutrition: {
      title: 'Nutrition This Phase',
      items: [
        'Calorie needs are similar to follicular — no major adjustment needed',
        'Zinc-rich foods support hormonal balance around ovulation — pumpkin seeds, beef, chickpeas',
        'Antioxidant-rich foods support the immune activity that accompanies ovulation',
        'Stay well hydrated — elevated body temperature slightly increases fluid needs',
        'Protein remains at target — muscle adaptation is still prioritised',
      ]
    },
    supplements: [
      {icon:'💪', name:'Creatine monohydrate', dose:'3-5g daily', why:'Peak training output means peak benefit from creatine — ensures phosphocreatine stores are full.'},
      {icon:'🌿', name:'Collagen + Vitamin C', dose:'10g collagen, 500mg Vit C pre-training', why:'Directly addresses increased ligament laxity risk — collagen synthesis supports tendon and ligament health.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'300mg', why:'Supports muscle recovery and sleep quality during a high-output phase.'},
      {icon:'🌞', name:'Vitamin D3', dose:'2000 IU daily', why:'Supports musculoskeletal health — particularly relevant given elevated injury risk this phase.'},
    ],
    body_changes: {
      title: 'Body Changes — What to Expect',
      items: [
        'Brief temperature rise around ovulation is completely normal',
        'Some women experience mid-cycle spotting — this is normal',
        'Mild pelvic discomfort called Mittelschmerz is common and not a concern',
        'You may feel a surge of confidence and energy — this is real, not imagined',
        'Weight may tick up slightly post-ovulation as progesterone begins rising',
      ]
    }
  },
  luteal: {
    name: 'Luteal Phase',
    days: 'Days 17-28',
    tags: ['Progesterone dominant', 'Higher calorie needs', 'Slower recovery', 'PMS window'],
    colour: 'rgba(180,100,60,.6)',
    training: {
      title: 'Training This Phase',
      intensity: 'Moderate — adjust expectations, not effort',
      items: [
        'Performance naturally dips as progesterone rises — this is physiology, not lack of fitness',
        'Perceived effort is higher for the same output — RPE will feel elevated',
        'Body temperature is 0.3-0.5 degrees higher — heat tolerance is reduced',
        'Recovery between sessions takes longer — reduce volume slightly if needed',
        'Strength training is still important and beneficial throughout luteal phase',
        'Lower-intensity steady-state cardio often feels better than HIIT in late luteal',
        'PMS symptoms peak in days 24-28 — train around them, be compassionate with yourself',
        'If mood is low, training is one of the most effective interventions — prioritise it',
      ]
    },
    nutrition: {
      title: 'Nutrition This Phase',
      items: [
        'Add 100-200 kcal above your normal target — metabolic rate genuinely increases',
        'Carbohydrate cravings are hormonal and real — satisfy them with complex carbs',
        'Serotonin drops in luteal phase — carbohydrates help restore it, which is why cravings exist',
        'Increase magnesium-rich foods to reduce PMS symptoms — dark chocolate is a valid choice',
        'Reduce salt to minimise water retention which is already elevated by progesterone',
        'Limit alcohol — it worsens mood disruption and inflammation in this phase',
        'Calcium-rich foods reduce PMS symptoms — dairy, fortified plant milks, sardines',
        'Do not interpret the scale increase as fat gain — it is water retention from progesterone',
      ]
    },
    supplements: [
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg before bed', why:'Most important supplement this phase. Reduces PMS, cramps, poor sleep and mood instability.'},
      {icon:'💊', name:'Vitamin B6', dose:'50-100mg daily', why:'Directly reduces PMS symptoms including mood changes, breast tenderness and bloating.'},
      {icon:'🌙', name:'5-HTP', dose:'50-100mg evening', why:'Precursor to serotonin — may help with mood and sleep in late luteal. Discuss with GP if on antidepressants.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'2-3g daily', why:'Reduces prostaglandin-driven inflammation and cramps that worsen in late luteal phase.'},
      {icon:'💊', name:'Calcium', dose:'500-1000mg daily', why:'Studies show calcium supplementation significantly reduces PMS severity.'},
    ],
    body_changes: {
      title: 'Body Changes — What to Expect',
      items: [
        'Weight can increase 1-4kg due to water retention — this is not fat, it reverses at menstruation',
        'Bloating is driven by progesterone slowing gut motility — completely normal',
        'Breast tenderness is normal and peaks in days 24-28',
        'Mood changes are real and hormonally driven — not weakness, not failure',
        'Skin may break out as progesterone increases sebum production',
        'Sleep quality often disrupts in late luteal — melatonin production can be affected',
        'The scale will normalise within 2-3 days of menstruation beginning',
      ]
    }
  }
};

const MENO_GUIDANCE = {
  perimenopausal: {
    label: 'Perimenopausal',
    desc: 'Transition phase — irregular cycles, fluctuating oestrogen',
    training: [
      'Resistance training is critical — muscle mass declines 1-2% per year without it',
      'Strength training directly counteracts bone density loss that begins in perimenopause',
      'Higher impact exercise (box jumps, running) is important for bone health — do not avoid it',
      'Recovery takes longer than pre-menopause — honour rest days without guilt',
      'Hot flushes during training are common — dress in layers, train in cooler environments',
      'Cycle irregularity makes phase tracking harder — focus on how you feel day to day',
      'Consistency over intensity — showing up every week matters more than any single session',
    ],
    nutrition: [
      'Protein needs INCREASE — aim for 1.6-2.0g per kg bodyweight to preserve muscle',
      'Calcium 1200mg daily — bone protection is non-negotiable in this phase',
      'Phytoestrogens may help symptoms — soy, flaxseed, chickpeas contain weak oestrogen-like compounds',
      'Reduce refined carbohydrates — insulin sensitivity declines with falling oestrogen',
      'Fibre intake is increasingly important for gut health and oestrogen metabolism',
      'Alcohol worsens hot flushes significantly — worth reducing',
      'Calorie needs may decrease slightly even as protein needs increase',
    ],
    supplements: [
      {icon:'🦴', name:'Calcium', dose:'1200mg daily (split doses)', why:'Bone density loss accelerates — calcium is foundational protection. Split across meals for absorption.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'2000-4000 IU D3, 100mcg K2', why:'D3 for calcium absorption, K2 directs calcium to bones not arteries. Take together.'},
      {icon:'💪', name:'Creatine monohydrate', dose:'3-5g daily', why:'Strong evidence for preserving muscle mass and cognitive function during menopause transition.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg nightly', why:'Reduces hot flushes, improves sleep, supports bone health and reduces anxiety.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'2-3g daily', why:'Cardiovascular protection becomes more important as oestrogen declines. Also supports mood.'},
      {icon:'🌿', name:'Collagen peptides', dose:'10-15g daily', why:'Skin, joint and connective tissue changes accelerate — collagen supports all three.'},
    ],
    body_changes: [
      'Weight distribution shifts toward the abdomen even without overall weight gain — this is hormonal',
      'Muscle loss accelerates — resistance training is the primary intervention',
      'Irregular periods, heavier or lighter bleeding — all normal in perimenopause',
      'Hot flushes and night sweats disrupt sleep — address sleep hygiene proactively',
      'Skin loses elasticity as oestrogen drops — hydration and collagen supplementation help',
      'Mood fluctuations are hormonally driven — not depression in the traditional sense',
      'Joint aches and reduced flexibility are common — maintain mobility work',
    ]
  },
  menopausal: {
    label: 'Menopausal',
    desc: '12 months without a period — hormonal transition at its peak',
    training: [
      'This is the most important time to be training — do not reduce intensity out of fear',
      'Heavy resistance training is the most effective intervention for menopause symptoms',
      'Bone density is now declining more rapidly — weight-bearing and impact exercise is medicine',
      'Cardiovascular risk increases post-oestrogen — cardio work becomes more important',
      'Balance training is worth adding — fall risk increases with age and hormonal change',
      'Exercise directly reduces hot flush frequency and severity — multiple studies confirm this',
      'You may find you need longer warm-ups and cool-downs — invest in them',
    ],
    nutrition: [
      'Protein target: 1.8-2.0g per kg bodyweight — highest priority nutrient in menopause',
      'Calcium 1200mg daily — bone protection is critical',
      'Reduce refined carbs and sugar — insulin resistance is more pronounced post-menopause',
      'Phytoestrogens: soy, flaxseed, tempeh may provide mild symptom relief',
      'Prioritise fibre for gut health, cholesterol management and satiety',
      'Adequate healthy fats support hormone production from remaining pathways',
    ],
    supplements: [
      {icon:'🦴', name:'Calcium', dose:'1200mg daily (split doses)', why:'Non-negotiable for bone health post-menopause. Food-first, supplement the remainder.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'4000 IU D3, 100mcg K2', why:'Bone protection and immune function. Higher dose appropriate post-menopause.'},
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'Strongest evidence base for muscle preservation and cognitive protection in menopause.'},
      {icon:'🟤', name:'Magnesium glycinate', dose:'400mg nightly', why:'Sleep improvement, hot flush reduction, bone health, mood support.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'3g daily', why:'Cardiovascular protection is now a priority — oestrogen was previously doing this work.'},
      {icon:'🌿', name:'Collagen + Vitamin C', dose:'15g collagen, 500mg Vit C', why:'Skin, joint and bone connective tissue all benefit. Take with a vitamin C source.'},
      {icon:'💊', name:'B12', dose:'1000mcg daily', why:'Absorption declines with age. Energy, nerve function and mood all depend on adequate B12.'},
    ],
    body_changes: [
      'Metabolic rate decreases — calorie needs reduce but protein needs increase',
      'Fat redistribution to abdomen is driven by oestrogen loss — resistance training is the main counterweight',
      'Skin changes: thinner, less elastic, slower healing — collagen and hydration are important',
      'Vaginal dryness and urinary changes are common — these have medical treatments available',
      'Cardiovascular risk rises to match male peers — take heart health seriously',
      'Cognitive changes are real — exercise, sleep and omega-3 are evidence-based interventions',
      'Body composition changes can be significant but are manageable with consistent training and protein',
    ]
  },
  postmenopausal: {
    label: 'Post-menopausal',
    desc: 'More than 12 months post-menopause — stable but low oestrogen',
    training: [
      'Progressive resistance training is the single most important health intervention available',
      'Bone density continues to decline without mechanical loading — lift heavy',
      'Balance and proprioception training reduces fall and fracture risk',
      'Cardiovascular training supports heart health, brain health and metabolic function',
      'There is no upper limit on the benefits of strength training — the research is clear',
      'Recovery requires more attention — 48-72 hours between heavy sessions is appropriate',
      'Joint health: warm up thoroughly, use full range of motion, prioritise mobility',
    ],
    nutrition: [
      'Protein: 1.8-2.0g per kg bodyweight remains the priority — muscle loss is ongoing without it',
      'Calcium 1200mg daily is lifelong from this point',
      'Anti-inflammatory diet is particularly beneficial — Mediterranean pattern is well evidenced',
      'Reduce processed foods, refined sugar and alcohol for cardiovascular and metabolic health',
      'Adequate hydration is more important and thirst signals become less reliable with age',
    ],
    supplements: [
      {icon:'🦴', name:'Calcium', dose:'1200mg daily', why:'Lifelong requirement from post-menopause. Bone resorption continues without adequate calcium.'},
      {icon:'🌞', name:'Vitamin D3 + K2', dose:'4000 IU D3, 100mcg K2', why:'Essential combination for bone protection and fall prevention.'},
      {icon:'💪', name:'Creatine monohydrate', dose:'5g daily', why:'Muscle preservation, strength, power and cognitive health. Excellent evidence in post-menopausal women.'},
      {icon:'🐟', name:'Omega-3 (EPA/DHA)', dose:'3g daily', why:'Cardiovascular, cognitive and anti-inflammatory benefits — all particularly relevant post-menopause.'},
      {icon:'💊', name:'B12', dose:'1000mcg daily', why:'Absorption declines with age — deficiency affects energy, nerves and cognition.'},
      {icon:'🌿', name:'Collagen peptides', dose:'15g daily', why:'Ongoing support for skin, joints, bones and connective tissue.'},
    ],
    body_changes: [
      'Body composition changes slow and stabilise with consistent training and nutrition',
      'Bone density loss continues at a slower rate — resistance training remains the primary protection',
      'Cardiovascular risk is the main health consideration — take it seriously',
      'Cognitive function is supported by exercise, omega-3 and adequate sleep',
      'Many women report feeling more settled and consistent than during perimenopause',
      'Strength and fitness gains remain fully achievable at any age post-menopause',
    ]
  }
};

let womensOpen = false;
let womensSetupDone = false;
let clientLifeStage = null;
let clientCyclePhase = null;

function toggleWomensSection() {
  womensOpen = !womensOpen;
  const content = document.getElementById('womens-content');
  const chevron = document.getElementById('wt-chevron');
  content.style.display = womensOpen ? 'block' : 'none';
  chevron.classList.toggle('open', womensOpen);
  if (womensOpen && !womensSetupDone) {
    renderWomensSetup();
  }
}

function renderWomensSetup() {
  const content = document.getElementById('womens-content');
  const lifeStages = [
    {key:'pre', label:'Pre-menopausal', sub:'Regular or irregular cycles'},
    {key:'perimenopausal', label:'Perimenopausal', sub:'Cycles changing, some symptoms'},
    {key:'menopausal', label:'Menopausal', sub:'No period for up to 12 months'},
    {key:'postmenopausal', label:'Post-menopausal', sub:'More than 12 months since last period'},
  ];

  content.innerHTML = `
    <div class="ws-setup">
      <div class="ws-setup-title">One-time setup</div>
      <div class="ws-setup-sub">
        Two quick questions so we can give you cycle-specific coaching.
        This only needs to be done once.
      </div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:rgba(220,120,180,.8);margin-bottom:8px;font-weight:600">
        What is your current life stage?
      </div>
      <div class="life-stage-grid" id="life-stage-grid">
        ${lifeStages.map(ls => `
          <div class="ls-card" onclick="selectLifeStage(this,'${ls.key}')">
            <div class="ls-card-title">${ls.label}</div>
            <div class="ls-card-sub">${ls.sub}</div>
          </div>`).join('')}
      </div>
      <div id="cycle-length-section" style="display:none;margin-bottom:14px">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:rgba(220,120,180,.8);margin-bottom:8px;font-weight:600">
          Average cycle length
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <input type="range" class="ps-slider" id="cycle-length-slider" min="21" max="35" value="28"
            oninput="document.getElementById('cycle-length-val').textContent=this.value">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:rgba(220,120,180,.9);width:50px">
            <span id="cycle-length-val">28</span><span style="font-size:12px;color:var(--ash)">d</span>
          </div>
        </div>
      </div>
      <button class="ws-save-btn" onclick="saveWomensSetup()">Save My Profile</button>
    </div>`;
}

let selectedLifeStage = null;

function selectLifeStage(el, key) {
  document.querySelectorAll('.ls-card').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  selectedLifeStage = key;
  const cycleSection = document.getElementById('cycle-length-section');
  if (cycleSection) {
    cycleSection.style.display = (key === 'pre' || key === 'perimenopausal') ? 'block' : 'none';
  }
}

async function saveWomensSetup() {
  if (!selectedLifeStage) {
    alert('Please select your life stage');
    return;
  }
  const cycleLength = parseInt(document.getElementById('cycle-length-slider')?.value) || 28;
  const email = currentUser?.email;

  const data = {
    life_stage: selectedLifeStage,
    cycle_length: cycleLength,
  };

  // Save locally
  localStorage.setItem(`womens_profile_${email}`, JSON.stringify(data));

  // Save to Supabase
  try {
    await fetch(`${SB_URL}/rest/v1/platform_users?email=eq.${encodeURIComponent(email)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      },
      body: JSON.stringify({
        life_stage: selectedLifeStage,
        cycle_length: cycleLength,
      })
    });
  } catch(_) {}

  clientLifeStage = selectedLifeStage;
  womensSetupDone = true;
  renderWomensContent();
}

async function loadWomensSection(checkins) {
  const email = currentUser?.email;
  if (!email) return;

  // Load saved profile
  const saved = localStorage.getItem(`womens_profile_${email}`);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      clientLifeStage = data.life_stage;
      womensSetupDone = true;
    } catch(_) {}
  }

  // Get latest cycle phase from check-ins
  const latestWithCycle = checkins.find(c => c.cycle_phase);
  if (latestWithCycle) {
    clientCyclePhase = latestWithCycle.cycle_phase?.toLowerCase().replace(' ', '') || null;
  }

  // Update sub text
  const subEl = document.getElementById('wt-sub-text');
  if (subEl && clientCyclePhase) {
    const phaseData = CYCLE_PHASES[clientCyclePhase];
    if (phaseData) subEl.textContent = phaseData.name + ' - ' + phaseData.days;
  }
}

function renderWomensContent() {
  const content = document.getElementById('womens-content');
  if (!content) return;

  const isPre = clientLifeStage === 'pre' || !clientLifeStage;
  const menoData = MENO_GUIDANCE[clientLifeStage];
  const phaseData = clientCyclePhase ? CYCLE_PHASES[clientCyclePhase] : null;

  let html = '';

  // Life stage badge
  const stageLabels = {pre:'Pre-menopausal', perimenopausal:'Perimenopausal', menopausal:'Menopausal', postmenopausal:'Post-menopausal'};

  if (menoData) {
    // Show menopausal content
    html += `
      <div class="phase-hero">
        <div class="ph-eyebrow">Your Life Stage</div>
        <div class="ph-name">${menoData.label}</div>
        <div class="ph-days">${menoData.desc}</div>
      </div>
      ${renderWsCard('🏋️', 'Training', menoData.training.map(t => ({text:t})), 'training-meno')}
      ${renderWsCard('🥗', 'Nutrition', menoData.nutrition.map(t => ({text:t})), 'nutrition-meno')}
      ${renderSuppsCard(menoData.supplements, 'supps-meno')}
      ${renderWsCard('📊', 'Body Changes', menoData.body_changes.map(t => ({text:t})), 'body-meno')}
      ${renderGPNote()}
      <div class="ws-edit-btn" onclick="resetWomensSetup()">Update my profile</div>`;

  } else if (phaseData) {
    // Pre-menopausal with cycle phase
    html += `
      <div class="phase-hero">
        <div class="ph-eyebrow">Current Cycle Phase</div>
        <div class="ph-name">${phaseData.name}</div>
        <div class="ph-days">${phaseData.days}</div>
        <div class="ph-tags">${phaseData.tags.map(t => `<span class="ph-tag">${t}</span>`).join('')}</div>
        <div style="font-size:11px;color:var(--ash)">
          Updates automatically each week from your check-in
        </div>
      </div>
      <div style="font-size:12px;color:var(--ash);margin-bottom:6px;padding:0 2px">
        Intensity today:
        <span style="color:rgba(220,120,180,.9);font-weight:500">${phaseData.training.intensity}</span>
      </div>
      ${renderWsCard('🏋️', phaseData.training.title, phaseData.training.items.map(t => ({text:t})), 'training-phase')}
      ${renderWsCard('🥗', phaseData.nutrition.title, phaseData.nutrition.items.map(t => ({text:t})), 'nutrition-phase')}
      ${renderSuppsCard(phaseData.supplements, 'supps-phase')}
      ${renderWsCard('📊', phaseData.body_changes.title, phaseData.body_changes.items.map(t => ({text:t})), 'body-phase')}
      ${renderGPNote()}
      <div class="ws-edit-btn" onclick="resetWomensSetup()">Update my profile</div>`;

  } else {
    // Pre-menopausal but no cycle phase yet
    html += `
      <div class="phase-hero">
        <div class="ph-eyebrow">Your Life Stage</div>
        <div class="ph-name">Pre-menopausal</div>
        <div class="ph-days">Complete your weekly check-in to unlock phase-specific coaching</div>
      </div>
      <div class="ws-note">
        <strong>How to unlock phase coaching</strong>
        In your Sunday check-in, Phase 5 asks about your cycle.
        Once you submit, your phase-specific training and nutrition advice will appear here automatically.
      </div>
      <div class="ws-edit-btn" onclick="resetWomensSetup()">Update my profile</div>`;
  }

  content.innerHTML = html;
}

function renderWsCard(icon, title, items, id) {
  return `
    <div class="ws-card">
      <div class="ws-card-head" onclick="toggleWsCard('${id}')">
        <span class="ws-card-icon">${icon}</span>
        <span class="ws-card-title">${title}</span>
        <span class="ws-card-chev" id="ws-chev-${id}">▾</span>
      </div>
      <div class="ws-card-body" id="ws-body-${id}">
        ${items.map(item => `
          <div class="ws-item">
            <div class="ws-item-dot"></div>
            <div>${item.text}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderSuppsCard(supplements, id) {
  return `
    <div class="ws-card">
      <div class="ws-card-head" onclick="toggleWsCard('${id}')">
        <span class="ws-card-icon">💊</span>
        <span class="ws-card-title">Supplements</span>
        <span class="ws-card-chev" id="ws-chev-${id}">▾</span>
      </div>
      <div class="ws-card-body" id="ws-body-${id}">
        ${supplements.map(s => `
          <div class="ws-supp">
            <div class="ws-supp-icon">${s.icon}</div>
            <div>
              <div class="ws-supp-name">${s.name}</div>
              <div class="ws-supp-dose">${s.dose}</div>
              <div class="ws-supp-why">${s.why}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderGPNote() {
  return `<div class="ws-note"><strong>Important</strong>Supplement recommendations are evidence-based but not medical advice. If you are on medication or have a medical condition, discuss with your GP before starting any new supplement. HRT options are available for menopausal symptoms and are worth discussing with your doctor.</div>`;
}

function toggleWsCard(id) {
  const body = document.getElementById(`ws-body-${id}`);
  const chev = document.getElementById(`ws-chev-${id}`);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (chev) chev.classList.toggle('open', !open);
}

function resetWomensSetup() {
  const email = currentUser?.email;
  localStorage.removeItem(`womens_profile_${email}`);
  clientLifeStage = null;
  womensSetupDone = false;
  selectedLifeStage = null;
  renderWomensSetup();
}

// ── NUTRITION LOGGING ────────────────────────────────────────────────────────
let mealPhotoB64 = null;
let mealPhotoMime = 'image/jpeg';
let todayMeals = [];
let nutritionTargets = {};

async function loadNutritionTab() {
  const email = currentUser?.email;
  if (!email) return;

  // Load targets from Supabase or localStorage
  const cachedTargets = localStorage.getItem(`nt_targets_${email}`);
  if (cachedTargets) {
    try { nutritionTargets = JSON.parse(cachedTargets); } catch(_) {}
  }

  // Try Supabase for targets
  try {
    const rows = await sbGet(`nutrition_targets?email=eq.${encodeURIComponent(email)}&limit=1&select=*`);
    if (rows.length) {
      nutritionTargets = rows[0];
      localStorage.setItem(`nt_targets_${email}`, JSON.stringify(nutritionTargets));
    }
  } catch(_) {}

  renderTargetsDisplay();

  // Load today meals
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('nt-date').textContent =
    new Date().toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long'});

  try {
    const meals = await sbGet(
      `meal_logs?email=eq.${encodeURIComponent(email)}&log_date=eq.${today}&order=created_at.asc&select=*`
    );
    todayMeals = meals;
  } catch(_) {
    todayMeals = [];
  }

  updateNutritionTotals();
  renderMealList();
}

function renderTargetsDisplay() {
  const el = document.getElementById('nt-targets-display');
  if (!el) return;
  if (!nutritionTargets.calories) {
    el.innerHTML = '<div style="font-size:12px;color:var(--ash)">No targets set. Use the calculator below to generate your targets, then tap Edit to save them here.</div>';
    return;
  }
  el.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">
      ${[
        ['Calories', nutritionTargets.calories, 'kcal'],
        ['Protein',  nutritionTargets.protein,  'g'],
        ['Carbs',    nutritionTargets.carbs,     'g'],
        ['Fat',      nutritionTargets.fat,       'g'],
      ].map(([name,val,unit]) => `
        <div style="text-align:center;background:#111;border-radius:6px;padding:8px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--gold);line-height:1">${val||'-'}</div>
          <div style="font-size:9px;color:var(--ash);text-transform:uppercase;letter-spacing:1px">${unit} ${name}</div>
        </div>`).join('')}
    </div>`;
}

function updateNutritionTotals() {
  const totals = todayMeals.reduce((acc, m) => ({
    cals:    acc.cals    + (parseInt(m.calories)||0),
    protein: acc.protein + (parseInt(m.protein_g)||0),
    carbs:   acc.carbs   + (parseInt(m.carbs_g)||0),
    fat:     acc.fat     + (parseInt(m.fat_g)||0),
  }), {cals:0, protein:0, carbs:0, fat:0});

  const targets = nutritionTargets;
  const calTarget = targets.calories || 0;
  const remain = calTarget ? calTarget - totals.cals : null;

  document.getElementById('nt-eaten').textContent = totals.cals;
  document.getElementById('nt-target').textContent = calTarget || '-';

  const remainEl = document.getElementById('nt-remain');
  if (remain !== null) {
    const over = remain < 0;
    remainEl.textContent = over
      ? `${Math.abs(remain)} kcal over target`
      : `${remain} kcal remaining`;
    remainEl.style.color = over ? '#E24B4A' : 'var(--greenl)';
  } else {
    remainEl.textContent = 'Set your targets to track progress';
  }

  const pct = (val, target) => target ? Math.min(100, Math.round(val/target*100)) : 0;

  document.getElementById('nt-val-p').textContent  = totals.protein + 'g';
  document.getElementById('nt-sub-p').textContent  = '/ ' + (targets.protein||'-') + 'g';
  document.getElementById('nt-fill-p').style.width = pct(totals.protein, targets.protein) + '%';

  document.getElementById('nt-val-c').textContent  = totals.carbs + 'g';
  document.getElementById('nt-sub-c').textContent  = '/ ' + (targets.carbs||'-') + 'g';
  document.getElementById('nt-fill-c').style.width = pct(totals.carbs, targets.carbs) + '%';

  document.getElementById('nt-val-f').textContent  = totals.fat + 'g';
  document.getElementById('nt-sub-f').textContent  = '/ ' + (targets.fat||'-') + 'g';
  document.getElementById('nt-fill-f').style.width = pct(totals.fat, targets.fat) + '%';
}

function renderMealList() {
  const el = document.getElementById('meal-list');
  if (!el) return;
  if (!todayMeals.length) {
    el.innerHTML = '<div style="text-align:center;padding:16px;font-size:12px;color:var(--ash)">No meals logged today yet.</div>';
    return;
  }
  el.innerHTML = todayMeals.map(m => `
    <div class="meal-card" id="meal-${m.id}">
      <div class="meal-card-head">
        ${m.photo_url ? `<img class="meal-thumb" src="${m.photo_url}" alt="meal">` :
          '<div class="meal-thumb" style="display:flex;align-items:center;justify-content:center;font-size:20px">🍽️</div>'}
        <div class="meal-info">
          <div class="meal-time">${new Date(m.created_at).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</div>
          <div class="meal-name">${m.meal_name || 'Meal'}</div>
        </div>
      </div>
      <div class="meal-macros-row">
        <span class="meal-macro-pill meal-macro-cals">${m.calories} kcal</span>
        <span class="meal-macro-pill meal-macro-pro">${m.protein_g}g P</span>
        <span class="meal-macro-pill meal-macro-carb">${m.carbs_g}g C</span>
        <span class="meal-macro-pill meal-macro-fat">${m.fat_g}g F</span>
      </div>
      ${m.mike_comment ? `<div class="meal-comment">${m.mike_comment}</div>` : ''}
      <div class="meal-delete" onclick="deleteMeal('${m.id}')">Delete</div>
    </div>`).join('');
}

// ── LOG MEAL MODAL ────────────────────────────────────────────────────────────
function openLogMeal() {
  mealPhotoB64 = null;
  document.getElementById('log-modal').style.display = 'flex';
  document.getElementById('meal-photo-preview').style.display = 'none';
  document.getElementById('log-analyse-btn').style.display = 'none';
  document.getElementById('log-result-area').style.display = 'none';
  document.getElementById('log-save-btn').style.display = 'none';
  document.getElementById('log-comment').style.display = 'none';
  document.getElementById('meal-analyse-loading').style.display = 'none';
  ['log-cals','log-protein','log-carbs','log-fat','log-meal-name'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function closeLogModal() {
  document.getElementById('log-modal').style.display = 'none';
}

function closeLogModalIfOutside(e) {
  if (e.target === document.getElementById('log-modal')) closeLogModal();
}

function triggerMealPhoto() {
  document.getElementById('meal-photo-input').click();
}

function handleMealPhoto(input) {
  const file = input.files[0];
  if (!file) return;
  mealPhotoMime = file.type || 'image/jpeg';
  const reader = new FileReader();
  reader.onload = e => {
    mealPhotoB64 = e.target.result.split(',')[1];
    const preview = document.getElementById('meal-photo-preview');
    preview.src = e.target.result;
    preview.style.display = 'block';
    document.getElementById('log-analyse-btn').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

async function analyseMealPhoto() {
  if (!mealPhotoB64) return;
  const btn = document.getElementById('log-analyse-btn');
  btn.disabled = true;
  document.getElementById('meal-analyse-loading').style.display = 'block';
  document.getElementById('log-result-area').style.display = 'none';

  const targets = nutritionTargets;
  const targetStr = targets.calories
    ? `Client targets: ${targets.calories} kcal, ${targets.protein}g protein, ${targets.carbs}g carbs, ${targets.fat}g fat.`
    : 'No specific targets set.';

  const prompt = `You are Mike Foster, Level 4 Nutrition coach. Analyse this meal photo and estimate the macros.

${targetStr}

Return JSON only:
{
  "meal_name": "short descriptive name",
  "calories": 450,
  "protein_g": 35,
  "carbs_g": 40,
  "fat_g": 12,
  "mike_comment": "one short punchy line in Mike voice about this meal relative to their targets"
}

Be realistic with estimates. If you cannot see the meal clearly, give conservative estimates.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': window.MFF_API_KEY || '',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mealPhotoMime, data: mealPhotoB64 } },
            { type: 'text',  text: prompt }
          ]
        }]
      })
    });

    const d = await res.json();
    if (d.error) throw new Error(d.error.message);
    const text = d.content.map(i => i.text||'').join('').replace(/```json|```/g,'').trim();
    const result = JSON.parse(text);

    document.getElementById('log-cals').value    = result.calories    || 0;
    document.getElementById('log-protein').value = result.protein_g   || 0;
    document.getElementById('log-carbs').value   = result.carbs_g     || 0;
    document.getElementById('log-fat').value     = result.fat_g       || 0;
    document.getElementById('log-meal-name').value = result.meal_name || '';

    if (result.mike_comment) {
      const commentEl = document.getElementById('log-comment');
      commentEl.textContent = result.mike_comment;
      commentEl.style.display = 'block';
    }

    document.getElementById('log-result-area').style.display = 'block';
    document.getElementById('log-save-btn').style.display = 'block';

  } catch(err) {
    document.getElementById('log-result-area').style.display = 'block';
    document.getElementById('log-save-btn').style.display = 'block';
    console.error('Meal analysis error:', err);
  }

  document.getElementById('meal-analyse-loading').style.display = 'none';
  btn.disabled = false;
}

async function saveMealLog() {
  const cals    = parseInt(document.getElementById('log-cals').value)    || 0;
  const protein = parseInt(document.getElementById('log-protein').value) || 0;
  const carbs   = parseInt(document.getElementById('log-carbs').value)   || 0;
  const fat     = parseInt(document.getElementById('log-fat').value)     || 0;
  const name    = document.getElementById('log-meal-name').value.trim() || 'Meal';
  const comment = document.getElementById('log-comment').textContent || '';
  const today   = new Date().toISOString().split('T')[0];

  const row = {
    email:        currentUser?.email,
    log_date:     today,
    meal_name:    name,
    calories:     cals,
    protein_g:    protein,
    carbs_g:      carbs,
    fat_g:        fat,
    mike_comment: comment,
  };

  const btn = document.getElementById('log-save-btn');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  try {
    const res = await fetch(`${SB_URL}/rest/v1/meal_logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(row)
    });

    if (res.ok) {
      const saved = await res.json();
      todayMeals.push(saved[0] || row);
      updateNutritionTotals();
      renderMealList();
      closeLogModal();
    }
  } catch(err) {
    console.error('Save meal error:', err);
  }

  btn.disabled = false;
  btn.textContent = 'Save Meal';
}

async function deleteMeal(id) {
  try {
    await fetch(`${SB_URL}/rest/v1/meal_logs?id=eq.${id}`, {
      method: 'DELETE',
      headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
    });
    todayMeals = todayMeals.filter(m => m.id !== id);
    updateNutritionTotals();
    renderMealList();
  } catch(err) { console.error('Delete error:', err); }
}

function openSetTargets() {
  const targets = nutritionTargets;
  const cals    = prompt('Daily calories target:', targets.calories || '2000');
  if (!cals) return;
  const protein = prompt('Protein target (g):', targets.protein || '150');
  if (!protein) return;
  const carbs   = prompt('Carbs target (g):', targets.carbs || '175');
  if (!carbs) return;
  const fat     = prompt('Fat target (g):', targets.fat || '65');
  if (!fat) return;

  nutritionTargets = {
    email:    currentUser?.email,
    calories: parseInt(cals),
    protein:  parseInt(protein),
    carbs:    parseInt(carbs),
    fat:      parseInt(fat),
  };

  localStorage.setItem(`nt_targets_${currentUser?.email}`, JSON.stringify(nutritionTargets));

  // Save to Supabase
  fetch(`${SB_URL}/rest/v1/nutrition_targets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SB_KEY,
      'Authorization': `Bearer ${SB_KEY}`,
      'Prefer': 'resolution=merge-duplicates,return=minimal'
    },
    body: JSON.stringify(nutritionTargets)
  }).catch(() => {});

  renderTargetsDisplay();
  updateNutritionTotals();
}

// ── RECOVERY SCORE ───────────────────────────────────────────────────────────
function calcRecoveryScore(data) {
  // data: {sleep_hours, sleep_quality, energy, body_feel}
  // All inputs normalised to 0-10, weighted sum
  const sleepHrsScore = Math.min(10, Math.max(0, ((data.sleep_hours||6) - 4) / 6 * 10));
  const qualityMap    = {'Poor':2,'OK':5,'Good':7.5,'Great':10};
  const sleepQuality  = qualityMap[data.sleep_quality] || 5;
  const energy        = parseInt(data.energy) || 5;
  const feelMap       = {'Fresh':10,'Normal':7,'Heavy':4,'Sore':3,'Injury concern':1};
  const bodyFeel      = feelMap[data.body_feel] || 5;

  // Weighted: sleep 35%, quality 25%, energy 25%, body feel 15%
  const score = Math.round(
    (sleepHrsScore * 0.35) +
    (sleepQuality  * 0.25) +
    (energy        * 0.25) +
    (bodyFeel      * 0.15)
  );
  return Math.min(10, Math.max(1, score));
}

function getRecoveryBand(score) {
  if (score >= 7) return {
    cls:'rb-green', emoji:'🟢',
    title:`Recovery ${score}/10 — Green light`,
    msg:"Ready to go. Push hard today. Chase the PB if it is there."
  };
  if (score >= 4) return {
    cls:'rb-amber', emoji:'🟡',
    title:`Recovery ${score}/10 — Amber`,
    msg:"Train smart. Hit the session, respect the loads. Do not force it."
  };
  return {
    cls:'rb-red', emoji:'🔴',
    title:`Recovery ${score}/10 — Red flag`,
    msg:"Body needs rest. Do the session at 70% or take a recovery day. No hero sets." 
  };
}

function renderRecoveryBanner(score) {
  const el = document.getElementById('recovery-banner');
  if (!el || !score) return;
  const band = getRecoveryBand(score);
  el.innerHTML = `
    <div class="recovery-banner ${band.cls}">
      <div class="rb-left">
        <div class="rb-emoji">${band.emoji}</div>
        <div>
          <div class="rb-title">${band.title}</div>
          <div class="rb-msg">${band.msg}</div>
        </div>
      </div>
      <div>
        <div class="rb-score">${score}</div>
        <div class="rb-score-lbl">/ 10</div>
      </div>
    </div>`;
}

async function loadTodayRecovery(email) {
  const today = new Date().toISOString().split('T')[0];
  try {
    const rows = await sbGet(
      `session_readiness?email=eq.${encodeURIComponent(email)}&session_date=eq.${today}&limit=1&select=recovery_score`
    );
    if (rows.length && rows[0].recovery_score) {
      renderRecoveryBanner(rows[0].recovery_score);
    }
  } catch(_) {} // table may not exist yet — silent fail
}

// ── PRE-SESSION CHECK-IN ──────────────────────────────────────────────────────
let presessionData = {};
let presessionDone = false;

function renderPresessionCheckin(sessionName, isRestDay) {
  const el = document.getElementById('presession-checkin');
  const logEl = document.getElementById('session-log-content');
  if (!el) return;

  if (isRestDay) {
    el.innerHTML = '';
    if (logEl) logEl.style.display = 'block';
    return;
  }

  // Check if already done today
  const today = new Date().toISOString().split('T')[0];
  const doneKey = `ps_done_${today}_${currentUser?.email}`;
  if (localStorage.getItem(doneKey)) {
    presessionDone = true;
    const stored = JSON.parse(localStorage.getItem(doneKey));
    renderRecoveryBanner(stored.score);
    el.innerHTML = `
      <div class="presession-wrap">
        <div class="ps-done">
          ${stored.emoji} Recovery score today: <strong style="color:var(--gold)">${stored.score}/10</strong>
          · <span style="cursor:pointer;color:var(--al);text-decoration:underline" onclick="resetPresession()">Update</span>
        </div>
      </div>`;
    if (logEl) logEl.style.display = 'block';
    return;
  }

  el.innerHTML = `
    <div class="presession-wrap">
      <div class="ps-head">
        <div>
          <div class="ps-head-title">⚡ Pre-Session Check</div>
          <div class="ps-head-sub">20 seconds · tells you how hard to push today</div>
        </div>
      </div>
      <div class="ps-body">

        <div class="ps-q">
          <div class="ps-q-label">😴 Sleep last night</div>
          <div class="ps-hours-row">
            <div>
              <div style="font-size:11px;color:var(--ash);margin-bottom:5px">Hours</div>
              <div class="ps-slider-row">
                <input type="range" class="ps-slider" id="ps-hours"
                  min="4" max="10" step="0.5" value="7"
                  oninput="document.getElementById('ps-hours-val').textContent=this.value">
                <div class="ps-slider-val" id="ps-hours-val">7</div>
              </div>
            </div>
            <div>
              <div style="font-size:11px;color:var(--ash);margin-bottom:5px">Quality</div>
              <div class="ps-chips" id="ps-quality-chips">
                ${['Poor','OK','Good','Great'].map(q =>
                  `<div class="ps-chip" onclick="selectPSChip(this,'quality')">${q}</div>`
                ).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="ps-q">
          <div class="ps-q-label">⚡ Energy right now (1–10)</div>
          <div class="ps-slider-row">
            <input type="range" class="ps-slider" id="ps-energy"
              min="1" max="10" step="1" value="6"
              oninput="document.getElementById('ps-energy-val').textContent=this.value">
            <div class="ps-slider-val" id="ps-energy-val">6</div>
          </div>
        </div>

        <div class="ps-q">
          <div class="ps-q-label">💪 Body feel</div>
          <div class="ps-chips" id="ps-feel-chips">
            ${['Fresh','Normal','Heavy','Sore','Injury concern'].map(f =>
              `<div class="ps-chip" onclick="selectPSChip(this,'feel')">${f}</div>`
            ).join('')}
          </div>
        </div>

        <button class="ps-btn" onclick="submitPresession('${sessionName}')">
          Calculate Recovery Score →
        </button>
      </div>
    </div>`;
}

function selectPSChip(el, group) {
  const container = el.closest('.ps-chips') || el.parentElement;
  container.querySelectorAll('.ps-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

async function submitPresession(sessionName) {
  const hours   = parseFloat(document.getElementById('ps-hours')?.value) || 7;
  const energy  = parseInt(document.getElementById('ps-energy')?.value) || 6;
  const quality = document.querySelector('#ps-quality-chips .ps-chip.sel')?.textContent || 'OK';
  const feel    = document.querySelector('#ps-feel-chips .ps-chip.sel')?.textContent    || 'Normal';

  const data = { sleep_hours: hours, sleep_quality: quality, energy, body_feel: feel };
  const score = calcRecoveryScore(data);
  const band  = getRecoveryBand(score);

  // Show banner on home tab
  renderRecoveryBanner(score);

  // Cache locally so it persists all day
  const today  = new Date().toISOString().split('T')[0];
  const doneKey = `ps_done_${today}_${currentUser?.email}`;
  localStorage.setItem(doneKey, JSON.stringify({ score, emoji: band.emoji }));

  // Save to Supabase
  if (currentUser?.email) {
    try {
      await fetch(`${SB_URL}/rest/v1/session_readiness`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SB_KEY,
          'Authorization': `Bearer ${SB_KEY}`,
          'Prefer': 'resolution=merge-duplicates,return=minimal'
        },
        body: JSON.stringify({
          email:          currentUser.email,
          session_date:   today,
          session_name:   sessionName,
          sleep_hours:    hours,
          sleep_quality:  quality,
          energy_score:   energy,
          body_feel:      feel,
          recovery_score: score,
        })
      });
    } catch(_) {} // silent — do not block UX if Supabase fails
  }

  // Show the score then reveal the session
  const psEl = document.getElementById('presession-checkin');
  if (psEl) {
    psEl.innerHTML = `
      <div class="presession-wrap">
        <div class="recovery-banner ${band.cls}" style="border-radius:0;margin:0;border-left:none;border-right:none;border-top:none">
          <div class="rb-left">
            <div class="rb-emoji">${band.emoji}</div>
            <div>
              <div class="rb-title">${band.title}</div>
              <div class="rb-msg">${band.msg}</div>
            </div>
          </div>
          <div>
            <div class="rb-score">${score}</div>
            <div class="rb-score-lbl">/ 10</div>
          </div>
        </div>
      </div>`;
  }

  // Reveal log screen
  const logEl = document.getElementById('session-log-content');
  if (logEl) {
    logEl.style.display = 'block';
    logEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  presessionDone = true;
}

function resetPresession() {
  const today   = new Date().toISOString().split('T')[0];
  const doneKey = `ps_done_${today}_${currentUser?.email}`;
  localStorage.removeItem(doneKey);
  presessionDone = false;
  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today2   = dayNames[new Date().getDay()];
  const sessMeta = {Monday:'Phalanx',Tuesday:'The Hunt',Wednesday:'The Spear',Thursday:'Krypteia',Friday:'Agoge',Saturday:'Lakedaimon'};
  renderPresessionCheckin(sessMeta[today2] || 'Session', false);
  const logEl = document.getElementById('session-log-content');
  if (logEl) logEl.style.display = 'none';
}

// ── FORM CHECK ───────────────────────────────────────────────────────────────
// Exercises eligible for form check — barbell, dumbbell, KB, rowing only
const FORM_CHECK_EXERCISES = [
  // Barbell
  'barbell back squat','barbell front squat','barbell deadlift','trap bar deadlift',
  'romanian deadlift','bench press','barbell hip thrust','barbell push press',
  'barbell overhead press','barbell row','barbell clean','barbell snatch',
  'barbell lunge','barbell reverse lunge','barbell good morning',
  // Dumbbell
  'db snatch','db clean','db press','dumbbell press','db row','dumbbell row',
  'db lunge','dumbbell lunge','db rdl','dumbbell rdl','db curl','dumbbell curl',
  'db lateral raise','db shoulder press','db goblet squat','dumbbell goblet squat',
  'db step up','dumbbell step up','db split squat',
  // Kettlebell
  'kb swing','kettlebell swing','kb clean','kb snatch','kb press','kb goblet squat',
  'kb deadlift','kb row','kb turkish get up','kb windmill','kb clean & press',
  // Rowing
  'row','rowing','machine row','ski erg','concept2','1km row','500m row',
  '2km row','machine sprint',
];

function isFormCheckExercise(name) {
  if (!name) return false;
  const lower = name.toLowerCase();
  return FORM_CHECK_EXERCISES.some(ex => lower.includes(ex));
}

// Show/hide form check panel for an exercise
function toggleFormCheck(safeName) {
  const exName = (window.exNameMap||{})[safeName] || safeName;
  const btn  = document.getElementById(`fc-btn-${safeName}`);
  const wrap = document.getElementById(`fc-wrap-${safeName}`);
  if (!wrap) return;
  const open = wrap.style.display === 'block';
  wrap.style.display = open ? 'none' : 'block';
  if (btn) btn.textContent = open ? '📹 Check My Form' : '✕ Close Form Check';
}

// Show form check buttons for eligible exercises (called after log screen renders)
function showFormCheckButtons() {
  document.querySelectorAll('.form-check-btn').forEach(btn => {
    btn.style.display = 'block';
  });
}

function triggerVideoUpload(safeName) {
  const input = document.getElementById(`fc-file-${safeName}`);
  if (input) input.click();
}

let formCheckFrames = {}; // Store base64 frames per exercise

async function handleFormCheckMedia(safeName, input) {
  const exName = (window.exNameMap||{})[safeName] || safeName;
  const file = input.files[0];
  if (!file) return;

  const previewEl  = document.getElementById(`fc-preview-${safeName}`);
  const videoEl    = document.getElementById(`fc-video-${safeName}`);
  const analyseBtn = document.getElementById(`fc-analyse-${safeName}`);

  if (!previewEl || !videoEl) return;

  const url = URL.createObjectURL(file);

  if (file.type.startsWith('video/')) {
    // Video — extract frames at key points
    videoEl.src = url;
    videoEl.style.display = 'block';
    previewEl.style.display = 'block';

    // Wait for video metadata then extract frames
    videoEl.onloadedmetadata = () => {
      extractVideoFrames(safeName, videoEl, file.type).then(frames => {
        formCheckFrames[safeName] = { frames, isVideo: true, exName };
        if (analyseBtn) analyseBtn.style.display = 'block';
      });
    };
  } else {
    // Static image
    videoEl.style.display = 'none';
    // Show image instead
    let imgEl = document.getElementById(`fc-img-${safeName}`);
    if (!imgEl) {
      imgEl = document.createElement('img');
      imgEl.id = `fc-img-${safeName}`;
      imgEl.style.cssText = 'width:100%;border-radius:6px;max-height:260px;object-fit:cover';
      previewEl.appendChild(imgEl);
    }
    imgEl.src = url;
    previewEl.style.display = 'block';

    // Convert to base64
    const reader = new FileReader();
    reader.onload = e => {
      const b64 = e.target.result.split(',')[1];
      formCheckFrames[safeName] = { frames: [b64], isVideo: false, exName, mimeType: file.type };
      if (analyseBtn) analyseBtn.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

async function extractVideoFrames(safeName, videoEl, mimeType) {
  const canvas  = document.createElement('canvas');
  const ctx     = canvas.getContext('2d');
  const duration = videoEl.duration;
  const frames  = [];

  // Extract 4 frames: start, 25%, 50%, 75% through the movement
  const times = [0.1, 0.3, 0.6, 0.85].map(t => Math.min(t * duration, duration - 0.1));

  for (const t of times) {
    await new Promise(resolve => {
      videoEl.currentTime = t;
      videoEl.onseeked = () => {
        canvas.width  = videoEl.videoWidth  || 640;
        canvas.height = videoEl.videoHeight || 360;
        ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
        const b64 = canvas.toDataURL('image/jpeg', 0.7).split(',')[1];
        frames.push(b64);
        resolve();
      };
    });
  }
  return frames;
}

const FORM_CUES = {
  // Barbell squats
  'squat': 'hip crease below knee, knees track toes, chest up, neutral spine, heels down, brace at top',
  'deadlift': 'hip hinge not squat, bar close to body, flat back, hips drive not lower back, lockout at top',
  'hip thrust': 'full hip extension at top, chin tucked, glutes squeezed, 3-second hold',
  'bench press': 'arch maintained, bar touches chest, elbows 45 degrees, full press',
  'push press': 'dip and drive from legs, lockout overhead, neutral spine throughout',
  'overhead press': 'bar path straight, lockout overhead, ribcage down, no lean back',
  'row': 'neutral spine, elbows back, scapulae retract at top, controlled eccentric',
  // KB/DB
  'swing': 'hip hinge not squat, explosive hip snap, arms relaxed, float at top',
  'snatch': 'hip drive, punch through at top, lockout overhead, no muscling up',
  'clean': 'hip drive, high elbows, catch in front rack, squat under',
  'goblet squat': 'depth, chest up, elbows inside knees, heels down',
  'lunge': 'front knee tracks toe, rear knee hovers, upright torso, drive through front heel',
  'split squat': 'front knee tracks toe, rear knee drops straight down, torso upright',
  // Rowing
  'row machine': 'drive legs first, lean back, pull arms, reverse on recovery — legs last',
  'ski erg': 'hinge at hips, arms lead, core braced, full extension at top',
};

function getFormCues(exName) {
  const lower = exName.toLowerCase();
  for (const [key, cues] of Object.entries(FORM_CUES)) {
    if (lower.includes(key)) return cues;
  }
  return 'technique, range of motion, joint alignment, control and stability';
}

async function analyseForm(safeName) {
  const exName = (window.exNameMap||{})[safeName] || safeName;
  const data = formCheckFrames[safeName];
  if (!data || !data.frames.length) return;

  const loadingEl = document.getElementById(`fc-loading-${safeName}`);
  const resultEl  = document.getElementById(`fc-result-${safeName}`);
  const analyseBtn = document.getElementById(`fc-analyse-${safeName}`);

  if (loadingEl) loadingEl.style.display = 'block';
  if (resultEl)  resultEl.style.display  = 'none';
  if (analyseBtn) analyseBtn.disabled = true;

  const cues = getFormCues(exName);
  const frameCount = data.frames.length;

  const imageContent = data.frames.map((frame, i) => ({
    type: 'image',
    source: {
      type: 'base64',
      media_type: 'image/jpeg',
      data: frame
    }
  }));

  const prompt = `You are Mike Foster, Level 3 Personal Trainer and coach at Mike Foster Fitness. Analyse these ${frameCount} ${data.isVideo ? 'video frames' : 'image(s)'} of a client performing ${exName}.

Key cues to assess: ${cues}

Give EXACTLY 3 bullet points. Each bullet starts with one of:
✅ (good — keep doing this)
⚠️ (needs attention — specific cue)  
❌ (fix this now — specific correction)

Then one line overall summary in Mike's direct voice.

Format your response as JSON only:
{
  "bullets": [
    {"type": "good|warn|fix", "icon": "✅|⚠️|❌", "text": "specific observation"},
    {"type": "good|warn|fix", "icon": "✅|⚠️|❌", "text": "specific observation"},
    {"type": "good|warn|fix", "icon": "✅|⚠️|❌", "text": "specific observation"}
  ],
  "overall": "one line Mike voice summary"
}`;

  try {
    const messages = [{
      role: 'user',
      content: [
        ...imageContent,
        { type: 'text', text: prompt }
      ]
    }];

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': window.MFF_API_KEY || '',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        messages
      })
    });

    const d = await res.json();
    if (d.error) throw new Error(d.error.message);

    const text = d.content.map(i => i.text || '').join('').replace(/```json|```/g, '').trim();
    const result = JSON.parse(text);

    renderFormCheckResult(safeName, exName, result);

  } catch(err) {
    if (resultEl) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = `<div style="font-size:13px;color:#E24B4A;padding:8px">Analysis failed: ${err.message}.<br>Make sure the API key is set and try again.</div>`;
    }
    console.error('Form check error:', err);
  }

  if (loadingEl) loadingEl.style.display = 'none';
  if (analyseBtn) analyseBtn.disabled = false;
}

function renderFormCheckResult(safeName, exName, result) {
  const resultEl = document.getElementById(`fc-result-${safeName}`);
  if (!resultEl) return;

  const typeClass = { good: 'good', warn: 'warn', fix: 'fix' };

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="fc-result-head">
      <div class="fc-result-ex">${exName}</div>
      <div class="fc-result-badge">Form Analysis</div>
    </div>
    <div class="fc-bullets">
      ${result.bullets.map(b => `
        <div class="fc-bullet ${typeClass[b.type]||'warn'}">
          <span class="fc-bullet-icon">${b.icon}</span>
          <span>${b.text}</span>
        </div>`).join('')}
    </div>
    ${result.overall ? `<div class="fc-overall">${result.overall}</div>` : ''}
    <button class="fc-retake" onclick="retakeFormCheck('${safeName}')">↺ Analyse another rep</button>
  `;
}

function retakeFormCheck(safeName) {
  const resultEl   = document.getElementById(`fc-result-${safeName}`);
  const previewEl  = document.getElementById(`fc-preview-${safeName}`);
  const analyseBtn = document.getElementById(`fc-analyse-${safeName}`);
  const fileInput  = document.getElementById(`fc-file-${safeName}`);
  if (resultEl)   resultEl.style.display   = 'none';
  if (previewEl)  previewEl.style.display  = 'none';
  if (analyseBtn) analyseBtn.style.display = 'none';
  if (fileInput)  fileInput.value = '';
  delete formCheckFrames[safeName];
}

// ── FITNESS TESTING DATA ──────────────────────────────────────────────────────
async function loadFitnessTests(email) {
  const tests = await sbGet(
    `leaderboard_entries?email=eq.${encodeURIComponent(email)}&order=created_at.asc&select=*`
  );

  // 300 Test history
  const t300El = document.getElementById('test300-history');
  const t300tests = tests.filter(t => t.test300_time).sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  // Check 300 Test milestone
  if (t300tests.length >= 2) {
    const prev = parseTime300(t300tests[t300tests.length-2].test300_time);
    const curr = parseTime300(t300tests[t300tests.length-1].test300_time);
    setTimeout(() => check300Milestone(prev, curr), 1000);
  }

  if (!t300tests.length) {
    t300El.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:8px 0">No 300 Test results yet. Complete your first test in Week 1.</div>';
  } else {
    const first = t300tests[0];
    const last  = t300tests[t300tests.length-1];
    const fSecs = parseTime300(first.test300_time);
    const lSecs = parseTime300(last.test300_time);
    const improvement = fSecs && lSecs ? fSecs - lSecs : null;

    t300El.innerHTML = `
      ${t300tests.length >= 2 ? `
        <div class="test300-hero">
          <div class="t3h-label">Your 300 Test Journey</div>
          <div class="t3h-times">
            <div>
              <div class="t3h-time">${first.test300_time}</div>
              <div class="t3h-tier">Week ${first.week_number||1}</div>
            </div>
            <div class="t3h-arrow">→</div>
            <div>
              <div class="t3h-time" style="color:var(--greenl)">${last.test300_time}</div>
              <div class="t3h-tier">Week ${last.week_number||'?'}</div>
            </div>
          </div>
          ${improvement ? `<div class="t3h-delta">▲ ${Math.floor(improvement/60)}m ${Math.round(improvement%60)}s faster</div>` : ''}
        </div>` : ''}
      <div class="test-history-card">
        <div class="thc-head">
          <div class="thc-name">300 Test Times</div>
          <div class="thc-best" style="font-size:14px">${t300tests.length} test${t300tests.length>1?'s':''}</div>
        </div>
        <div class="thc-entries">
          ${t300tests.map((t,i) => {
            const prev = t300tests[i-1];
            const secs = parseTime300(t.test300_time);
            const prevSecs = prev ? parseTime300(prev.test300_time) : null;
            const delta = secs && prevSecs ? prevSecs - secs : null;
            return `
              <div class="thc-entry">
                <div class="thc-entry-wk">Wk ${t.week_number||i+1}</div>
                <div class="thc-entry-val">${t.test300_time}</div>
                <div class="thc-entry-tier" style="color:${t300TierColor(secs)}">${t300Tier(secs)}</div>
                <div class="thc-entry-delta" style="color:${delta>0?'var(--greenl)':delta<0?'#E24B4A':'var(--ash)'}">
                  ${delta!=null?(delta>0?'▲':'▼')+Math.abs(Math.floor(delta/60))+'m'+Math.round(Math.abs(delta)%60)+'s':'—'}
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  // Other fitness tests
  const fitEl = document.getElementById('fitness-tests');
  const testFields = [
    {key:'deadlift_1rm',     label:'Deadlift 1RM',  unit:'kg'},
    {key:'squat_1rm',        label:'Squat 1RM',     unit:'kg'},
    {key:'bench_1rm',        label:'Bench 1RM',     unit:'kg'},
    {key:'ohp_1rm',          label:'OHP 1RM',       unit:'kg'},
    {key:'pullup_max',       label:'Pull-Up Max',   unit:'reps'},
    {key:'pushup_max',       label:'Push-Up Max',   unit:'reps'},
    {key:'row_1km',          label:'1km Row',       unit:'time'},
    {key:'broad_jump',       label:'Broad Jump',    unit:'cm'},
  ];

  const hasTests = tests.some(t => testFields.some(f => t[f.key]));
  if (!hasTests) {
    fitEl.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:8px 0">Fitness test data will appear here after your SPM battery in Week 1.</div>';
  } else {
    fitEl.innerHTML = testFields.map(field => {
      const entries = tests.filter(t => t[field.key]).map(t => ({
        val: t[field.key],
        week: t.week_number || '?'
      }));
      if (!entries.length) return '';
      const best = entries.reduce((b,e) => {
        const bv = parseFloat(b.val)||0;
        const ev = parseFloat(e.val)||0;
        return ev > bv ? e : b;
      });
      return `
        <div class="test-history-card">
          <div class="thc-head">
            <div class="thc-name">${field.label}</div>
            <div class="thc-best">${best.val}<span style="font-size:12px;color:var(--al)">${field.unit}</span></div>
          </div>
          ${entries.length > 1 ? `
            <div class="thc-entries">
              ${entries.map((e,i) => {
                const prev = entries[i-1];
                const delta = prev ? (parseFloat(e.val) - parseFloat(prev.val)) : null;
                return `
                  <div class="thc-entry">
                    <div class="thc-entry-wk">Wk ${e.week}</div>
                    <div class="thc-entry-val">${e.val} ${field.unit}</div>
                    <div></div>
                    <div class="thc-entry-delta" style="color:${delta>0?'var(--greenl)':delta<0?'#E24B4A':'var(--ash)'}">
                      ${delta!=null?(delta>0?'+':'')+delta.toFixed(1):'—'}
                    </div>
                  </div>`;
              }).join('')}
            </div>` : ''}
        </div>`;
    }).filter(Boolean).join('');
  }

  // Personal bests from session logs
  const pbEl = document.getElementById('personal-bests');
  const logs = await sbGet(
    `session_logs?email=eq.${encodeURIComponent(email)}&completed=eq.true&order=weight_kg.desc&limit=100&select=*`
  );

  if (!logs.length) {
    pbEl.innerHTML = '<div style="font-size:13px;color:var(--ash);padding:8px 0">Personal bests will appear here as you log sessions.</div>';
  } else {
    const pbByEx = {};
    logs.forEach(l => {
      if (!l.weight_kg) return;
      if (!pbByEx[l.exercise_name] || l.weight_kg > pbByEx[l.exercise_name].weight_kg) {
        pbByEx[l.exercise_name] = l;
      }
    });

    pbEl.innerHTML = Object.entries(pbByEx)
      .sort(([,a],[,b]) => b.weight_kg - a.weight_kg)
      .map(([name, pb]) => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(42,42,42,.5)">
          <div>
            <div style="font-size:13px;font-weight:500;color:#fff">${name}</div>
            <div style="font-size:11px;color:var(--ash)">Week ${pb.week_number} · ${pb.reps_actual} reps</div>
          </div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--gold)">${pb.weight_kg}kg</div>
        </div>`).join('');
  }
}

function parseTime300(str) {
  if (!str) return null;
  if (str.includes(':')) {
    const [m,s] = str.split(':').map(Number);
    return m*60+s;
  }
  return parseFloat(str)||null;
}

function t300Tier(secs) {
  if (!secs) return '—';
  if (secs<=900)  return 'Spartan King';
  if (secs<=1200) return 'Elite Warrior';
  if (secs<=1500) return 'Battle Ready';
  if (secs<=1800) return 'Warrior';
  if (secs<=2400) return 'Recruit';
  return 'In Training';
}

function t300TierColor(secs) {
  if (!secs) return 'var(--ash)';
  if (secs<=900)  return '#FFD700';
  if (secs<=1200) return 'var(--greenl)';
  if (secs<=1500) return 'var(--gold)';
  if (secs<=1800) return '#5BAEF5';
  return 'var(--ash)';
}

// ── INVITE TOKEN HANDLING ────────────────────────────────────────────────────
async function checkInviteToken() {
  const params = new URLSearchParams(window.location.search);
  const token  = params.get('invite');
  if (!token) return false;

  try {
    // Look up the token
    const res = await fetch(`${SB_URL}/rest/v1/invite_tokens?token=eq.${token}&select=*`, {
      headers:{ 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
    });
    const rows = await res.json();

    if (!rows.length) {
      showInviteError('This invite link is invalid.');
      return true;
    }

    const inv = rows[0];

    if (inv.used) {
      showInviteError('This invite link has already been used. Please sign in.');
      return true;
    }

    if (new Date(inv.expires_at) < new Date()) {
      showInviteError('This invite link has expired. Ask Mike to send a new one.');
      return true;
    }

    // Valid token — look up the user
    const userRes = await fetch(`${SB_URL}/rest/v1/platform_users?email=eq.${encodeURIComponent(inv.email)}&select=*`, {
      headers:{ 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
    });
    const users = await userRes.json();
    const user  = users[0] || {};

    // Show set-password screen
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('set-password-screen').classList.remove('hidden');
    document.getElementById('invite-name').textContent = user.first_name || 'Warrior';
    document.getElementById('invite-email').value = inv.email;

    // Store token for use in activateAccount
    window._inviteToken = token;
    window._inviteEmail = inv.email;
    window._inviteUser  = user;

    return true;
  } catch(e) {
    console.error('Invite check error:', e);
    return false;
  }
}

function showInviteError(msg) {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('auth-err').textContent = msg;
}

async function activateAccount() {
  const pass  = document.getElementById('invite-pass').value;
  const pass2 = document.getElementById('invite-pass2').value;
  const errEl = document.getElementById('invite-err');
  errEl.textContent = '';

  if (pass.length < 8) { errEl.textContent = 'Password must be at least 8 characters.'; return; }
  if (pass !== pass2)  { errEl.textContent = "Passwords do not match."; return; }

  const btn = document.querySelector('#set-password-screen .auth-btn');
  btn.disabled = true;
  btn.textContent = 'Activating...';

  try {
    // Simple hash — in production use bcrypt via a server function
    // For now store a salted hash using Web Crypto
    const encoder  = new TextEncoder();
    const data     = encoder.encode(pass + window._inviteEmail + 'spartan16salt');
    const hashBuf  = await crypto.subtle.digest('SHA-256', data);
    const hashArr  = Array.from(new Uint8Array(hashBuf));
    const hashHex  = hashArr.map(b => b.toString(16).padStart(2,'0')).join('');

    // Save password hash to platform_users
    await fetch(`${SB_URL}/rest/v1/platform_users?email=eq.${encodeURIComponent(window._inviteEmail)}`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      },
      body: JSON.stringify({ password_hash: hashHex, last_login: new Date().toISOString() })
    });

    // Mark token as used
    await fetch(`${SB_URL}/rest/v1/invite_tokens?token=eq.${window._inviteToken}`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json',
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`
      },
      body: JSON.stringify({ used: true, used_at: new Date().toISOString() })
    });

    // Log them straight in
    currentUser = window._inviteUser;
    currentUser.email = window._inviteEmail;
    currentRole = 'client';
    saveSession();

    // Clean URL and init app
    window.history.replaceState({}, '', window.location.pathname);
    document.getElementById('set-password-screen').classList.add('hidden');
    initApp();

  } catch(e) {
    errEl.textContent = 'Something went wrong. Try again.';
    btn.disabled = false;
    btn.textContent = 'Activate Account →';
    console.error(e);
  }
}

// ── INIT ─────────────────────────────────────────────────────────────────────
(async () => {
  // Pre-fill email if coming from registration page
  const params      = new URLSearchParams(window.location.search);
  const regEmail    = params.get('email');
  const justReg     = params.get('registered');
  const emailInput  = document.getElementById('auth-email');

  if (regEmail && emailInput) {
    emailInput.value = decodeURIComponent(regEmail);
    // Focus password field
    setTimeout(() => document.getElementById('auth-pass')?.focus(), 300);
  }

  if (justReg) {
    const errEl = document.getElementById('auth-err');
    if (errEl) {
      errEl.style.color = 'var(--greenl)';
      errEl.textContent = 'Account created. Enter your password to sign in.';
    }
    // Clean URL without refreshing
    window.history.replaceState({}, '', window.location.pathname);
  }

  // Check for invite token first
  const hasInvite = await checkInviteToken();
  if (!hasInvite) {
    // Normal login flow
    if (loadSession()) {
      initApp();
    }
  }
})();

// Handle Enter on email field
document.getElementById('auth-email').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('auth-pass').focus();
});


