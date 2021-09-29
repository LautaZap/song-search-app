import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Header = ({ handleSearch }) => {
  return (
    <header>
      <button
        onClick={() => {
          handleSearch(null);
        }}
      >
        <h1>
          <MusicNoteIcon />
          Search your Song
        </h1>
      </button>
    </header>
  );
};

export default Header;
