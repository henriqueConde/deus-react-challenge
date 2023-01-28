import { describe, it } from 'vitest';
import { render } from '@utils/customTestSetup';
import SinglePost from './SinglePost';

describe('<SinglePost />', () => {
  it('should render dorrectly', () => {
    const { container } = render(<SinglePost />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-dmctIk hnKyxa"
        >
          <article
            class="sc-hHTYSt izhDSc"
            data-testid="comment-wrapper"
          >
            <main
              class="sc-idXgbr hWpjXw"
            >
              <div
                class="sc-dIfARi fiUSOL"
                color="bright"
                data-testid="spinner"
              />
            </main>
          </article>
          <div
            class="sc-kDvujY eQUXQe"
          >
            <form
              data-testid="create-comment-form"
            >
              <div
                class="sc-hBxehG hrKgOd"
              >
                <label
                  class="sc-csuSiG jFxNzx"
                  for="content"
                >
                  Make a Comment
                </label>
                <div
                  class="sc-ipEyDJ iCzfaX"
                >
                  <textarea
                    class="sc-eDWCr evtRVw"
                    cols="50"
                    data-testid="textarea"
                    id="content"
                    name="content"
                    rows="4"
                  />
                </div>
                <p
                  class="sc-ksBlkl hCyjQC"
                />
              </div>
              <div
                class="sc-jrcTuL cwTqAf"
              >
                <label
                  class="sc-gKPRtg BFpnk"
                  for="name"
                >
                  Name
                </label>
                <div
                  class="sc-jSUZER iYEWkd"
                >
                  <input
                    class="sc-iBYQkv iJKBfx"
                    id="name"
                    name="name"
                    type="text"
                    value=""
                  />
                </div>
                <p
                  class="sc-pyfCe jejPhq"
                />
              </div>
              <button
                class="sc-gswNZR iFIVnc"
                type="submit"
              >
                <span>
                  Submit Comment
                </span>
              </button>
            </form>
          </div>
          <div />
        </div>
      </div>
    `);
  });
});
